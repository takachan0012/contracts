import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { defineChain } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const pharos_testnet = defineChain({
  id: 688688,
  name: 'Pharos Network Testnet',
  caipNetworkId: 'eip155:688688',
  chainNamespace: 'eip155',
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
  },
  
  
})

export const networks = [pharos_testnet] as [AppKitNetwork, ...AppKitNetwork[]]
export const ethersAdapter = new EthersAdapter();