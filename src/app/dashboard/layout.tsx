import '@/app/ui/dashboard.css'

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import Footer from '@/app/ui/dashboard/footer/footer'
import Navbar from '@/app/ui/dashboard/navbar/navbar'
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar'
import MobileSidebar from '@/app/ui/dashboard/mobile-sidebar/mobile-sidebar'
import AuthProvider from '@/providers/AuthProvider'
import { authOptions } from '@/lib/authOptions'

export const metadata: Metadata = {
  title: 'Dashboard Intratec',
  description: 'Dashboard - Intratec Tecnologia'
}

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <AuthProvider session={session}>
      <main className="flex dashboard">
        <div className="w-full sm:w-1/4 lg:w-2/12 min-h-screen bg-[--bgSoft] hidden sm:flex p-2 sm:p-4">
          <Sidebar />
        </div>
        <MobileSidebar />
        <div className="w-full sm:w-3/4 lg:w-10/12 p-2 sm:p-4">
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </AuthProvider>
  )
}
