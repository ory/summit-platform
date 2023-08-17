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
    "A global, one-day conference around first party data, privacy, application authorisation, identity, authentication, end-to-end security based on zero trust principles.",
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
          "[--ory-global-padding:1.5rem] sm:[--ory-global-padding:3rem] lg:[--ory-global-padding:6rem]",
          "[--ory-max-content-width:1344px]",
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
