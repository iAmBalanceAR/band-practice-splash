import * as React from "react"
import { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"
import NavBar from "@/components/splash/nav-bar"
import "@/app/globals.css"
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] })

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Band Practice CRM",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "120"
  },
  "description": "Band Practice CRM simplifies tour management, booking, and logistics for bands and musicians.",
  "image": "https://bandpracticecrm.com/images/band-practice.logo.g.png"
}

export const metadata: Metadata = {
  title: "Band Practice CRM",
  description: "Solving the Independent Musician's Tour Logistics. Do Music, Not Paperwork.",
  other: {
    'application-ld+json': JSON.stringify(jsonLd)
  }
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
  const fbPixelScript = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '944984164384923');
    fbq('track', 'PageView');
  `

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: fbPixelScript }} />
        <noscript>
          <Image
            height={1}
            width={1}
            className="hidden"
            src="https://www.facebook.com/tr?id=944984164384923&ev=PageView&noscript=1"
            alt=""
            unoptimized
          />
        </noscript>
      </head>
      <body 
        className={inter.className}
        suppressHydrationWarning
      >
        <Analytics />
        <NavBar />
        <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
