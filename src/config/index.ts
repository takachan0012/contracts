import { defineChain } from "thirdweb"

export const pharosTestnet = defineChain({
    id: 688688,
    name: 'Pharos Network Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'pharos network',
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