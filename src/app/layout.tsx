import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import './globals.css';
import ContextProvider from '@/context'

export const metadata: Metadata = {
  title: "AppKit in Next.js + ethers",
  description: "AppKit example dApp",
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
        <ContextProvider>{children}</ContextProvider>
        <Toaster position="bottom-right" reverseOrder={false}/>
      </body>
    </html>
  );
}
