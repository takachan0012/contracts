"use client";
import { use } from "react";

import { ConnectButton } from "@/components/ConnectButton"
import Image from 'next/image'
import { CreateContractButton } from "@/components/CreateContractButton"
import { networks } from "@/config"
import { notFound } from "next/navigation"


interface HomePage {
  params: Promise<{
    id: string
  }>
}

export default function Home(props: HomePage) {
  const params = use(props.params);
  const chainId = Number(params.id)
  const network = networks.find(net => net.id === chainId)

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
            href="https://takadev.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            >takadev →</a>
          </p>
      </div>
  </div>

  );
}