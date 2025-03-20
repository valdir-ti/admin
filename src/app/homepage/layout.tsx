import '@/app/ui/dashboard.css'

import type { Metadata } from 'next'
import { Header } from '../ui/portfolio/header/header'

export const metadata: Metadata = {
  title: 'Dashboard Intratec',
  description: 'Dashboard - Intratec Tecnologia'
}

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="home h-screen">
      <Header />
      <main>{children}</main>
    </section>
  )
}
