'use client'

import { useAppKitProvider, useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react"
import { BrowserProvider, Eip1193Provider, ContractFactory } from "ethers"
import ContractERC20 from "@/lib/ContractERC20.json"
import Input from "./Input"
import { useState } from "react"
import toast from "react-hot-toast"
import { networks } from "@/config"

interface ParamsCreateContract {
    name: string,
    symbol: string,
    initialSupply: number
}

export const CreateContractButton = () => {
    const { isConnected } = useAppKitAccount()
    const { walletProvider } = useAppKitProvider('eip155')
    const network = useAppKitNetwork()
    const [data, setData] = useState({
        name: '', symbol: '', initialsupply: 1000_000
    })
    const [isLoading, setIsLoading] = useState(false)
    const createContract = async ({
        name, symbol, initialSupply
    }:ParamsCreateContract) => {
        if(!isConnected) {
            toast.error("Wallet is disconnected")
            throw Error('Wallet disconnected');
        } 
        try {
            setIsLoading(true)
            toast.loading("Deploying token...")
            const ethersProvider = new BrowserProvider(walletProvider as Eip1193Provider)
            const signer = await ethersProvider.getSigner()
            const explorerUrl = networks.find(net => net.id === network?.chainId)?.blockExplorers?.default.url
            const contract = new ContractFactory(ContractERC20.abi, ContractERC20.bytecode, signer)
            const createContract = await contract.deploy(
                name, symbol, initialSupply
            )
            await createContract.waitForDeployment()
            toast.dismiss()
            toast.success(
                <span>
                    Token deployed:&nbsp;
                    <a
                        href={`${explorerUrl}/address/${createContract.target}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        View on Explorer
                    </a>
                </span>
            )
            setData({
                name: "",
                symbol: "",
                initialsupply: 0
            })
        } catch (error: unknown) {
            toast.dismiss();

            if (
                typeof error === "object" &&
                error !== null &&
                "error" in error &&
                typeof error === "object" &&
                error !== null &&
                "message" in error
            ) {
                const nestedError = error as {
                    error: { message: string };
                    shortMessage?: string;
                };
                toast.error(`Failed to deploy: ${nestedError.error.message}`);
                console.log(`Error message: ${nestedError.error.message}`);
            } else if (
                typeof error === "object" &&
                error !== null &&
                "shortMessage" in error
            ) {
                const err = error as { shortMessage: string };
                toast.error(`Failed to deploy: ${err.shortMessage}`);
                console.log(`Error shortMessage: ${err.shortMessage}`);
            } else {
                toast.error("Failed to deploy: Unknown error");
                console.error("Unknown error:", error);
            }
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <div className="swap-container">
            <Input onChange={(e) => setData({...data, name: e.target.value})} type="text" value={data.name} placeholder="Name" />
            <Input onChange={(e) => setData({...data, symbol: e.target.value})} type="text" value={data.symbol} placeholder="Symbol" />
            <Input onChange={(e) => setData({...data, initialsupply: Number(e.target.value)})} type="number" value={data.initialsupply == 0 ? "" : data.initialsupply.toString()} placeholder="Supply" />
            <button onClick={() => createContract({
                name: data.name,
                symbol: data.symbol,
                initialSupply: data.initialsupply
            })} disabled={isLoading || !isConnected || data.name.trim() === "" || data.symbol.trim() === "" || data.initialsupply === 0} className={`swap-button ${isLoading ? "loading" : ""}`}>
                {isLoading ? "Deploying..." : "Deploy"}
            </button>
        </div>
    )
}