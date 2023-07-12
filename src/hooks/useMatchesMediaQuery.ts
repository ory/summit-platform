"use client"

import { useEffect, useState } from "react"

export const useMatchesMediaQuery = (
  query: string,
  defaultValue = false,
): boolean => {
  const [matches, setMatches] = useState<boolean>(defaultValue)

  useEffect(() => {
    setMatches(window.matchMedia(query).matches)
  }, [query])

  return matches
}

export const usePreferredColorScheme = () => {
  return useMatchesMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
}

export const usePrefersReducedMotion = () => {
  return useMatchesMediaQuery("(prefers-reduced-motion: reduce)", true)
}
