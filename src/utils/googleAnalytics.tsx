'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined') {
    window.dataLayer.push(args)
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      gtag('js', new Date())
      gtag('config', GA_TRACKING_ID)
    }
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
    </>
  )
}
