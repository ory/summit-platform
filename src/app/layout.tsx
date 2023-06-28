import { Footer } from "./Footer"
import { Navigation } from "./Navigation"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-rose-50 font-mono font-light text-gray-900 accent-blue-500 dark:bg-indigo-950 dark:text-white dark:accent-rose-500">
        <div className="flex min-h-screen flex-col">
          <Navigation />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
