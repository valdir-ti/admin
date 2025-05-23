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
  return (
    <div className="login">
      <main>{children}</main>
    </div>
  )
}
