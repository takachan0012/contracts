"use client"

import * as React from "react"
import { ConnectButton } from "@/components/ConnectButton"
import Image from 'next/image'
import { CreateContractButton } from "@/components/CreateContractButton"
import { networks } from "@/config"
import { notFound } from "next/navigation"


interface HomePage {
  params: {
    id: string
  }
}

export default function Home({params}: HomePage) {
  const { id } = React.use()
  const network = networks.find(net => net.id === id)

  if(!network) return notFound()
  return (
  <div className="pages">
      <div className="connect-button-wrapper">
        <ConnectButton />
      </div>
      <div className="center-container">
        <Image src="/reown.svg" alt="Reown" width={150} height={150} priority />
        <h1>Easily Launch Your Own Token</h1>
      </div>
      <CreateContractButton />
      <div className="center-container">
          <p>
            Made with &#9829; by <a 
            style={{color: "#fff"}}
            href="https://takanode.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            >takanode →</a>
          </p>
      </div>
  </div>

  );
}