'use client'

import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react"
import { BrowserProvider, Eip1193Provider, ContractFactory } from "ethers"
import ContractERC20 from "@/lib/ContractERC20.json"
import Input from "./Input"
import { useState } from "react"
import { ConnectButton } from "./ConnectButton"

interface ParamsCreateContract {
    name: string,
    symbol: string,
    initialSupply: number
}

export const CreateContractButton = () => {
    const { isConnected } = useAppKitAccount()
    const { walletProvider } = useAppKitProvider('eip155')
    const [data, setData] = useState({
        name: '', symbol: '', initialsupply: 1000_000
    })
    const [isLoading, setIsLoading] = useState(false)
    const createContract = async ({
        name, symbol, initialSupply
    }:ParamsCreateContract) => {
        if(!isConnected) throw Error('Wallet disconnected');
        try {
            setIsLoading(true)
            const ethersProvider = new BrowserProvider(walletProvider as Eip1193Provider)
            const signer = await ethersProvider.getSigner()
            const contract = new ContractFactory(ContractERC20.abi, ContractERC20.bytecode, signer)
            const createContract = await contract.deploy(
                name, symbol, initialSupply
            )
            await createContract.waitForDeployment()
            console.log(`success deploy! token address: ${createContract.target}`)
        } catch (error) {
            console.error(`failed deploy: ${error}`)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <div className="swap-container">
            <Input onChange={(e) => setData({...data, name: e.target.value})} type="text" value={data.name} placeholder="Name" />
            <Input onChange={(e) => setData({...data, symbol: e.target.value})} type="text" value={data.symbol} placeholder="Symbol" />
            <Input onChange={(e) => setData({...data, initialsupply: Number(e.target.value)})} type="number" value={data.initialsupply.toString()} placeholder="Supply" />
            {
                isConnected ? 
                <button onClick={() => createContract({
                    name: data.name,
                    symbol: data.symbol,
                    initialSupply: data.initialsupply
                })} disabled={isLoading || !isConnected || data.name.trim() === "" || data.symbol.trim() === ""} className={`swap-button ${isLoading ? "loading" : ""}`}>
                    {isLoading ? "Deploying..." : "Deploy"}
                </button> : <ConnectButton/>
            }
        </div>
    )
}