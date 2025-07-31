'use client'

import { useClientMounted } from "@/hooks/useClientMount"

export const ConnectButton = () => {
  const isMounted = useClientMounted()
  return (
    <>
      {isMounted ? <appkit-button /> : <div className="connect-button-skeleton"></div>}
    </>
  )
}
