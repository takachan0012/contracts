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