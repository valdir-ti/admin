import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import 'react-confirm-alert/src/react-confirm-alert.css'
import './ui/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import GoogleAnalytics from '../utils/googleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard Intratec',
  description: 'Intratec Tecnologia'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <ToastContainer autoClose={1600} />
        {children}
      </body>
    </html>
  )
}
