import { defineChain } from "thirdweb"

export const pharosTestnet = defineChain({
    id: 688688,
    name: 'pharos network testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'pharos network testnet',
        symbol: 'PHRS'
    },
    rpcUrls: {
        default: {
        http: ['https://testnet.dplabs-internal.com/'],
        webSocket: ['wss://testnet.dplabs-internal.com/']
        }
    },
    blockExplorers: {
        default: {
        name: 'Explorer',
        url: 'https://testnet.pharosscan.xyz/'
        }
    }
})