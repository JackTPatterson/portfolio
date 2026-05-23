import type React from "react"
import type { Metadata } from "next"
import {Sora} from "next/font/google"
import "./globals.css"

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "Jack Patterson",
  description: "Personal website of Jack Patterson",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.className} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
