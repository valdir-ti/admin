import './ui/globals.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import GoogleAnalytics from '../utils/googleAnalytics'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono'
})

export const metadata: Metadata = {
  title: 'Portfólio Intratec',
  description: 'Portfólio - Intratec Tecnologia'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${jetBrainsMono.className}`}>
        <GoogleAnalytics />
        <ToastContainer autoClose={1600} />
        {children}
      </body>
    </html>
  )
}
