"use client"

import Spline from "@splinetool/react-spline"
import type { Application as SplineApplication } from "@splinetool/runtime"
import { useCallback, useRef } from "react"

export const AnimatedMountains = () => {
  const splineRef = useRef<SplineApplication>()

  const onLoad = useCallback((spline: SplineApplication) => {
    splineRef.current = spline
  }, [])

  return (
    <>
      <Spline
        scene="https://prod.spline.design/u35vYWZpi4Z0ei5Y/scene.splinecode"
        className="absolute -z-[1] lg:top-0"
        onLoad={onLoad}
      />
    </>
  )
}
