'use client'

import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react"
import { BrowserProvider, Eip1193Provider, ContractFactory } from "ethers"
import ContractERC20 from "@/lib/ContractERC20.json"

export const CreateContractButton = () => {
    const { isConnected } = useAppKitAccount()
    const { walletProvider } = useAppKitProvider('eip155')

    async function createContract(){
        if(!isConnected) throw Error('Wallet disconnected');
        
        const ethersProvider = new BrowserProvider(walletProvider as Eip1193Provider)
        const signer = await ethersProvider.getSigner()
        const contract = new ContractFactory(ContractERC20.abi, ContractERC20.bytecode, signer)
        const createContract = await contract.deploy(
            "Nexus Token",
            "NT", 
            2000_000
        )
        await createContract.waitForDeployment()
        console.log(`success! token address: ${createContract.target}`)
    }
    return <button onClick={createContract}>Deploy token</button>
}