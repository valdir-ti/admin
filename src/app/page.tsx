'use client'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Home() {

  useEffect(() => {

    if (process.env.NEXT_PUBLIC_ENVIRONMENT !== "development") {

      const restartServer = async () => {
        await fetch(process.env.NEXT_PUBLIC_API_PROD!)
          .then(() => { })
          .catch((err) => {
            toast.error("Error, please try again")
          })
      }

      toast.promise(
        restartServer,
        {
          pending: "Please wait while we are restarting our servers",
          success: "Servers alive",
          error: "Error, please try again",
        }
      )
    }

  }, [])

  return (
    <main>
      Home page
    </main>
  )
}
