'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { networks } from "@/config"
import { useAppKitNetwork } from "@reown/appkit/react"

export default function NetworkWatcher(){
    const router = useRouter()
    const network = useAppKitNetwork()

    useEffect(() => {
        if(!network.chainId) return

        const isSupported = networks.some(net => net.id === network.chainId)

        if(isSupported){
            router.push(`/chainid/${network.chainId}`)
        }
    }, [network?.chainId, router])

    return null
}