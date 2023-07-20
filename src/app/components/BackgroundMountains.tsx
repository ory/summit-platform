"use client"

import bgDarkStill from "@/assets/background-dark-still.webp"
import bgLightStill from "@/assets/background-light-still.webp"
import {
  usePreferredColorScheme,
  usePrefersReducedMotion,
} from "@/hooks/useMatchesMediaQuery"
import dynamic from "next/dynamic"
import { PropsWithChildren, useEffect, useState } from "react"
import { P, match } from "ts-pattern"

const ClientSideOnly = ({ children }: PropsWithChildren) => {
  const [isInClient, setIsInClient] = useState(false)

  useEffect(() => {
    setIsInClient(true)
  }, [])

  return isInClient ? <>{children}</> : null
}

export const BackgroundMountains = () => {
  const theme = usePreferredColorScheme()
  const prefersReducedMotion = usePrefersReducedMotion()

  const placeholder = match([theme, prefersReducedMotion])
    .with(["light", P._], () => bgLightStill)
    .with(["dark", P._], () => bgDarkStill)
    .exhaustive()

  const src = match([theme, prefersReducedMotion])
    .with(["light", P._], () => "/background-light-animated.mp4")
    .with(["dark", P._], () => "/background-dark-animated.mp4")
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
          poster={placeholder.src}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </ClientSideOnly>
  )
}

export default dynamic(() => Promise.resolve(BackgroundMountains), {
  ssr: false,
})
