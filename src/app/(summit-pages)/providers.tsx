"use client"

import { SanityProvider } from "@/contexts/sanity-context"
import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"
import { Talk } from "../../../sanity/lib/sanityClient"
import { Speaker } from "../../../sanity.config"

export const Providers = ({
  children,
  speakers,
  talks,
}: PropsWithChildren<{ speakers: Speaker[]; talks: Talk[] }>) => (
  <SanityProvider value={{ talks, speakers }}>
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  </SanityProvider>
)
