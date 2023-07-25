"use client"

import bgDarkStill from "@/assets/background-dark-still.webp"
import bgLightStill from "@/assets/background-light-still.webp"
import {
  usePreferredColorScheme,
  usePrefersReducedMotion,
} from "@/hooks/useMatchesMediaQuery"
import dynamic from "next/dynamic"
import { PropsWithChildren, useEffect, useState } from "react"
import { match } from "ts-pattern"

const ClientSideOnly = ({ children }: PropsWithChildren) => {
  const [isInClient, setIsInClient] = useState(false)

  useEffect(() => {
    setIsInClient(true)
  }, [])

  return isInClient ? <>{children}</> : null
}

export const BackgroundVideo = () => {
  const theme = usePreferredColorScheme()
  const prefersReducedMotion = usePrefersReducedMotion()

  const [placeholder, src] = match(theme)
    .with(
      "light",
      () => [bgLightStill, "/background-light-animated.webm"] as const,
    )
    .with(
      "dark",
      () => [bgDarkStill, "/background-dark-animated.webm"] as const,
    )
    .exhaustive()

  return (
    <ClientSideOnly>
      <div className="absolute -inset-y-[1px] inset-x-0 h-full w-full overflow-hidden object-fill">
        <video
          autoPlay
          playsInline
          muted
          loop
          preload="none"
          className="h-full w-full select-none object-cover"
          role="presentation"
          poster={placeholder.src}
        >
          {!prefersReducedMotion && <source src={src} type="video/webm" />}
        </video>
      </div>
    </ClientSideOnly>
  )
}

export default dynamic(() => Promise.resolve(BackgroundVideo), {
  ssr: false,
})
