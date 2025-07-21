'use client'

import { ethersAdapter, projectId, networks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'next-reown-appkit',
  description: 'next-reown-appkit',
  url: 'https://github.com/0xonerb/next-reown-appkit-ssr', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
export const modal = createAppKit({
  adapters: [ethersAdapter],
  projectId,
  networks,
  metadata,
  themeMode: 'dark',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  },
  chainImages: {
    688688: 'https://images.dodoex.io/dxc9CigBxKMxndcqOKVsmQSwtGB0HJfcQF2wLhTTkKU/rs:fit:60:60:0/g:no/aHR0cHM6Ly90b2tlbi1pbWcuZG9kb2V4LmlvLzY4ODY4OC8weDMwMTliMjQ3MzgxYzg1MGFiNTNkYzBlZTUzYmNlN2EwN2VhOTE1NWY.webp'
  }
})

function ContextProvider({ children }: { children: ReactNode}) {
  return (
    <>{children}</>
  )
}

export default ContextProvider
