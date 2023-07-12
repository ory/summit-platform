"use client"

import { useComputeInClient } from "@/hooks/useComputeInClient"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"
import { Button } from "./Button"

export const ButtonWithRedirectTo = <C extends "a" | typeof Link = "a">(
  props: ComponentProps<typeof Button<C>>,
) => {
  const path = usePathname()
  const currentUrl = useComputeInClient(() => window?.location?.href, "", [
    path,
  ])

  if (typeof props.href === "string") {
    const url = new URL(props.href)
    url.searchParams.set("redirectTo", currentUrl)
    return <Button href={url.toString} {...props} />
  }

  return <Button {...props} />
}
