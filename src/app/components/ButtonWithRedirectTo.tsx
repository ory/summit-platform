"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, useEffect, useMemo } from "react"
import { Button } from "./Button"

export const ButtonWithRedirectTo = <C extends "a" | typeof Link = "a">(
  props: ComponentProps<typeof Button<C>>,
) => {
  const path = usePathname()
  // We want the current URL to be updated on every navigation,
  // so this is used to hook into that
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentUrl = useMemo(() => window.location.href, [path])

  if (typeof props.href === "string") {
    const url = new URL(props.href)
    url.searchParams.set("redirectTo", currentUrl)
    props.href = url.toString()
  }

  return <Button {...props} />
}
