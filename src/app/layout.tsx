import { bodyStyles } from "@/app/body-styles"
import "./matomo"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    // next-themes causes hydration warnings because it may change the theme instantly in the client.
    // This issue is expected and currently (2023-08-10) there doesn't seem to be a better option than
    // suppressing it. https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1664694281
    <html lang="en" suppressHydrationWarning>
      <body className={bodyStyles}>{children}</body>
    </html>
  )
}
