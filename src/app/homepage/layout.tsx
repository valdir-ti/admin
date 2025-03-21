import '@/app/ui/dashboard.css'

import type { Metadata } from 'next'

import { Header } from '../ui/portfolio/header/header'
import PageTransition from '../ui/portfolio/page-transition/page-transition'
import StairTransition from '../ui/portfolio/stair-transition/stair-transition'

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
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </section>
  )
}
