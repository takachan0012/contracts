'use client'

import { useClientMounted } from "@/hooks/useClientMount"
import { useEffect, useRef } from "react"

export const ConnectButton = () => {
  const isMounted = useClientMounted()
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleClick = () => {
      // Get the <appkit-button> element
      const appkitEl = wrapper.querySelector('appkit-button') as HTMLElement & { shadowRoot?: ShadowRoot }
      if (!appkitEl || !appkitEl.shadowRoot) return
      // Now query inside the Shadow DOM
      const innerButton = appkitEl.shadowRoot.querySelector('appkit-connect-button')?.shadowRoot?.querySelector('wui-connect-button')?.shadowRoot?.querySelector('button') as HTMLButtonElement | null
      console.log({innerButton})
      if (innerButton) {
        innerButton.click()
        console.log('Clicked connect button via shadow DOM!')
      } else {
        console.log('Inner button not found inside shadow root.')
      }
    }


    wrapper.addEventListener('click', handleClick);
    return () => wrapper.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="container-connect-button"
    >
      {isMounted ? <appkit-button /> : <div className="connect-button-skeleton"></div>}
    </div>
  )
}
