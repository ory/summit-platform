"use client"

import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"
import { SWRConfig } from "swr"
import { Speaker, Talk } from "../../../sanity.config"

export const Providers = ({
  children,
  speakers,
  talks,
}: PropsWithChildren<{ speakers: Speaker[]; talks: Talk[] }>) => (
  <SWRConfig value={{ fallback: { speakers, talks } }}>
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  </SWRConfig>
)
