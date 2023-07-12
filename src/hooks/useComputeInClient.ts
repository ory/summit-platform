"use client"

import { useEffect, useState } from "react"

export const useComputeInClient = <T>(
  computeValue: () => T,
  fallback: T,
  deps: unknown[] = [],
): T => {
  const [value, setValue] = useState(fallback)

  useEffect(() => {
    setValue(computeValue())
    // Purposefully only re-renders on mount (i.e. on client render)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return value
}
