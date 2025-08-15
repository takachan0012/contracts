import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

import './globals.css';
import ContextProvider from '@/context'
import NetworkWatcher from "@/components/NetworkWatcher";

export const metadata: Metadata = {
  title: "Token Creator dApp | Built with Next.js & Ethers.js",
  description: "Create and deploy your own custom crypto tokens using our decentralized application. Powered by Next.js and ethers.js.",
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
