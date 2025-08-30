import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

import './globals.css';
import ContextProvider from '@/context'
import NetworkWatcher from "@/components/NetworkWatcher";

export const metadata: Metadata = {
  title: "Contract Deployer | Deploy Smart Contracts Instantly",
  description:
      "The fastest way to deploy smart contracts on EVM",
  keywords: [
    "Contract Deployer",
    "Deploy Smart Contract",
    "Smart Contract Tool",
    "EVM dApp",
    "Ethereum dApp",
    "Polygon dApp",
    "Solidity Contracts",
    "Web3 Development",
    "takadev",
    "Blockchain dApp",
  ],
  authors: [{ name: "Takadev", url: "https://takadev.xyz" }],
  creator: "takadev",
  publisher: "takadev",
  metadataBase: new URL("https://contractdeployer.takadev.xyz"), // replace with your dApp domain
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Contract Deployer | Deploy Smart Contracts Instantly",
    description:
      "The fastest way to deploy smart contracts on EVM",
    url: "https://contractdeployer.takadev.xyz",
    siteName: "Contract Deployer",
    images: [
      {
        url: "https://contractdeployer.takadev.xyz/reown.svg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Contract Deployer dApp",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contract Deployer | Deploy Smart Contracts Instantly",
    description:
      "The fastest way to deploy smart contracts on EVM",
    creator: "@kazutora_nichh", // replace with your handle
    images: ["https://contractdeployer.takadev.xyz/reown.svg"], // replace with your dApp logo
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ContextProvider>
          <NetworkWatcher/>
          {children}
        </ContextProvider>
        <Toaster position="bottom-right" reverseOrder={false}/>
        <Analytics/>
      </body>
    </html>
  );
}
