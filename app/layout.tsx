import * as React from "react"
import { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Band Practice CRM",
  description: "Solviing the Independant Musican's Tour Logistics. Do Music, Not Paperwork.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={inter.className}
        suppressHydrationWarning
      >
        <Analytics />
        <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
