import classNames from "classnames"
import { JetBrains_Mono } from "next/font/google"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"
import "./globals.css"

export const metadata = {
  title: {
    default: "Ory Summit 2023",
  },
}

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "bg-white font-light text-gray-900 accent-blue-500 dark:bg-indigo-950 dark:text-white dark:accent-rose-500",
          jetbrainsMono.className,
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Navigation />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
