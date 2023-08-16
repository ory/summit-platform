"use client"

import bgDarkStill from "@/assets/background-dark-still.webp"
import bgLightStill from "@/assets/background-light-still.webp"
import { usePrefersReducedMotion } from "@/hooks/useMatchesMediaQuery"
import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import { PropsWithChildren, useEffect, useRef, useState } from "react"
import { match } from "ts-pattern"

const ClientSideOnly = ({ children }: PropsWithChildren) => {
  const [isInClient, setIsInClient] = useState(false)

  useEffect(() => {
    setIsInClient(true)
  }, [])

  return isInClient ? <>{children}</> : null
}

export const BackgroundVideo = () => {
  const { resolvedTheme: theme } = useTheme()
  const prefersReducedMotion = usePrefersReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  const [placeholder, src] = match(theme)
    .with(
      "dark",
      () => [bgDarkStill, "/background-dark-animated.webm"] as const,
    )
    .otherwise(() => [bgLightStill, "/background-light-animated.webm"] as const)

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to re-instate video playback state after theme switch
      const beforeLoad = Date.now()
      videoRef.current.pause()
      const oldVideoTime = videoRef.current.currentTime
      videoRef.current.load()
      videoRef.current.addEventListener(
        "canplay",
        () => {
          const afterLoad = Date.now()
          // If loading took too long, don't reset as it would look like a glitch from
          // the fallback image
          const shouldReinstateVideoTime = afterLoad - beforeLoad < 500
          if (videoRef.current && shouldReinstateVideoTime) {
            videoRef.current.currentTime = oldVideoTime
          }
        },
        { once: true },
      )
    }
  }, [src])

  return (
    <ClientSideOnly>
      <div className="absolute -inset-y-[1px] inset-x-0 h-full w-full overflow-hidden object-fill">
        <video
          ref={videoRef}
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
