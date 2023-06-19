import { Footer } from "./Footer"
import { Navigation } from "./Navigation"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-rose-50 text-gray-900 accent-blue-500 dark:bg-indigo-950 dark:text-white dark:accent-rose-500">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
