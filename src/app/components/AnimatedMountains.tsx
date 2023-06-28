"use client"

import Spline from "@splinetool/react-spline"
import type { Application as SplineApplication } from "@splinetool/runtime"
import { useCallback, useEffect, useRef, useState } from "react"

const usePreferredColorScheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    )
  }, [])

  return theme
}

export const AnimatedMountains = () => {
  const splineRef = useRef<SplineApplication>()
  const theme = usePreferredColorScheme()

  const onLoad = useCallback((spline: SplineApplication) => {
    splineRef.current = spline
  }, [])

  const scene =
    theme === "dark"
      ? "https://prod.spline.design/2kxuwnmAKcF4jU45/scene.splinecode"
      : "https://prod.spline.design/u35vYWZpi4Z0ei5Y/scene.splinecode"

  return (
    <>
      <Spline
        scene={scene}
        className="absolute -z-[1] lg:top-0"
        onLoad={onLoad}
      />
    </>
  )
}
