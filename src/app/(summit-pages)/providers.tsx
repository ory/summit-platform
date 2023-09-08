"use client"

import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"
import { SWRConfig } from "swr"
import { Speaker } from "../../../sanity.config"

export const Providers = ({
  children,
  speakers,
}: PropsWithChildren<{ speakers: Speaker[] }>) => (
  <SWRConfig value={{ fallback: { speakers } }}>
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  </SWRConfig>
)
