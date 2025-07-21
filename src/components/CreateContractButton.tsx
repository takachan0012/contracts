'use client'

import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react"
import { BrowserProvider, Contract, Eip1193Provider } from "ethers"
import ContractFactoryAbi from "@/lib/ContractFactory.json"

const contractFactory = "0x7aaf7793a3e02ff5061ee5d43425316be00f4d88"

export const CreateContractButton = () => {
    const { isConnected } = useAppKitAccount()
    const { walletProvider } = useAppKitProvider('eip155')

    async function createContract(){
        if(!isConnected) throw Error('Wallet disconnected');
        
        const ethersProvider = new BrowserProvider(walletProvider as Eip1193Provider)
        const signer = await ethersProvider.getSigner()
        const contract = new Contract(contractFactory, ContractFactoryAbi, signer)
        const createContract = await contract.createToken("Fame on Fire", "FOF", 2000000)
        await createContract.wait()
        console.log(`success! hash: ${createContract.hash}`)
    }
    return <button onClick={createContract}>Create token</button>
}