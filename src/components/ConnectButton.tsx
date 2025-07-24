'use client'

import { ConnectButton as Connect } from "thirdweb/react"
import { client } from "@/app/client"
import { pharosTestnet } from "@/config"
import { createWallet } from "thirdweb/wallets"

export default function ConnectButton() {
    return (
        <Connect
            chain={pharosTestnet}
            client={client}
            wallets={[
                createWallet('io.metamask'),
                createWallet("com.okex.wallet")
            ]}
        />
    )
}