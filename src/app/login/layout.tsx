import '@/app/ui/dashboard.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Intratec',
  description: 'Dashboard - Intratec Tecnologia'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="flex">{children}</div>
}
