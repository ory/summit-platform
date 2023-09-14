import { cn } from "@/utils/cn"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
})

export const bodyStyles = cn(
  "[--ory-global-padding:1.5rem] sm:[--ory-global-padding:3rem] lg:[--ory-global-padding:6rem]",
  "[--ory-max-content-width:1344px]",
  "bg-white font-light text-gray-900 accent-blue-500 dark:bg-indigo-950 dark:text-white dark:accent-rose-500",
  jetbrainsMono.className,
)
