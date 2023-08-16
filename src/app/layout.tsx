import { Providers } from "@/app/providers"
import { cn } from "@/utils/cn"
import { JetBrains_Mono } from "next/font/google"
import { Footer } from "./footer"
import "./matomo"
import { Navigation } from "./navigation"
import "./globals.css"

export const metadata = {
  title: {
    default: "Ory Summit 2023",
    template: "%s | Ory Summit 2023",
  },
  description:
    "A one-day conference around open source end-to-end security and zero trust solutions for the Ory Community — customers, developers, maintainers, and partners.",
}

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    // next-themes causes hydration warnings because it may change the theme instantly in the client.
    // This issue is expected and currently (2023-08-10) there doesn't seem to be a better option than
    // suppressing it. https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1664694281
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-white font-light text-gray-900 accent-blue-500 dark:bg-indigo-950 dark:text-white dark:accent-rose-500",
          jetbrainsMono.className,
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
