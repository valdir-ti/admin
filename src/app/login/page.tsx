'use client'

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

import LoginButton from './loginButton'
import SocialButton from './socialButton'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  const error = searchParams.get('error')

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    setLoading(true)

    signIn('credentials', {
      ...data,
      callbackUrl: '/dashboard'
    })
  }

  return (
    <div className="grid place-content-center h-screen w-full">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center bg-[--bgSoft] rounded-md w-96 h-96 gap-8"
      >
        <h3 className="font-bold text-3xl">Login</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-[80%] h-12 rounded-sm bg-[--bg] pl-2 border-0"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-[80%] h-12 rounded-sm bg-[--bg] pl-2 border-0"
        />
        <LoginButton loading={loading} />
        <span>
          {error === 'CredentialsSignin' && (
            <div className="text-red-500 text-center text-sm mt-2">
              Erro no login
            </div>
          )}
        </span>
      </form>
      <div className="flex justify-center space-x-2 mt-2">
        <SocialButton
          alt="Google Icon"
          icon="/g-icon.png"
          signInService="google"
        />
        <SocialButton
          alt="Github Icon"
          icon="/git-icon.png"
          signInService="github"
        />
      </div>
    </div>
  )
}
