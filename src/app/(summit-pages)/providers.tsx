"use client"

import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
)
