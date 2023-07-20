"use client"

import {
  usePreferredColorScheme,
  usePrefersReducedMotion,
} from "@/hooks/useMatchesMediaQuery"
import Image from "next/image"
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

  const src = match([theme, prefersReducedMotion])
    // .with(["light", false], () => "/background-light-animated.webp")
    // .with(["dark", false], () => "/background-dark-animated.webp")
    .with(["light", P._], () => "/background-light-still.webp")
    .with(["dark", P._], () => "/background-dark-still.webp")
    .exhaustive()

  return (
    <ClientSideOnly>
      <Image
        width={1920}
        height={1080}
        src={src}
        alt=""
        loading="eager"
        quality={80}
        className="absolute inset-0 -z-10 h-full w-full select-none object-cover"
      />
    </ClientSideOnly>
  )
}
