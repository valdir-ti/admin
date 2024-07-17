'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import Header from './ui/site/header/header'
import Footer from './ui/site/footer/footer'

export default function Home() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development') {
      const restartServer = async () => {
        await fetch(process.env.NEXT_PUBLIC_API_PROD!)
          .then(() => {})
          .catch((err) => {
            console.error('O seguinte erro ocorreu:', err?.message)
            toast.error('Error, please try again')
          })
      }

      toast.promise(restartServer, {
        pending: 'Please wait while we are restarting our servers',
        success: 'Servers alive',
        error: 'Error, please try again'
      })
    }
  }, [])

  return (
    <main>
      <Header />
      <div className="mt-2 cursor-pointer">
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>
      <Footer />
    </main>
  )
}
