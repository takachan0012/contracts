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

export const pharos_testnet_atlantic = defineChain({
  id: 688689,
  name: "Atlantic Testnet",
  caipNetworkId: "eip155:688689",
  chainNamespace: "eip155",
  nativeCurrency: {
    decimals: 18,
    name: "Atlantic Testnet",
    symbol: "PHRS",
  },
  rpcUrls: {
    default: {
      http: ["https://atlantic.dplabs-internal.com/"],
      webSocket: ["wss://testnet.dplabs-internal.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://atlantic.pharosscan.xyz/",
    },
  },
});


export const nexus_testnet3 = defineChain({
  id: 3940,
  name: 'Nexus Testnet III',
  caipNetworkId: 'eip155:3940',
  chainNamespace: 'eip155',
  nativeCurrency: {
    decimals: 18,
    name: 'Nexus Token',
    symbol: 'NEX'
  },
  rpcUrls: {
    default: {
      http: ['https://nexus-testnet.g.alchemy.com/public'],
      webSocket: ['wss://testnet3.rpc.nexus.xyz']
    }
  },
  blockExplorers: {
    default: {
      name: 'Explorer',
      url: 'https://testnet3.explorer.nexus.xyz/'
    }
  },
})

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  pharos_testnet,
  pharos_testnet_atlantic,
  nexus_testnet3,
];
export const ethersAdapter = new EthersAdapter();