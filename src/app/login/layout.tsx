import '@/app/ui/dashboard.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Intratec',
  description: 'Dashboard - Intratec Tecnologia'
}

export default async function LoginLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <main className="login">{children}</main>
}
