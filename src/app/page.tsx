"use client"

import { ConnectButton } from "@/components/ConnectButton";
import Image from 'next/image';
import { CreateContractButton } from "@/components/CreateContractButton";

export default function Home() {
  return (
  <div className="pages">
      <div className="connect-button-wrapper">
        <ConnectButton />
      </div>
      <div className="center-container">
        <Image src="/reown.svg" alt="Reown" width={150} height={150} priority />
        <h1>AppKit ethers Next.js App Router Example</h1>
      </div>
      <CreateContractButton />
      <div className="center-container">
          <p>
            This projectId only works on localhost. <br />
            Go to <a href="https://cloud.reown.com" target="_blank" className="link-button" rel="Reown Cloud">Reown Cloud</a> to get your own.
          </p>
      </div>
  </div>

  );
}