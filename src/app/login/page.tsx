'use client'

import { FormEvent, useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ImEyeBlocked, ImEye } from 'react-icons/im'

import LoginButton from './loginButton'
import SocialButton from './socialButton'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [typePassword, setTypePassword] = useState('password')

  const error = searchParams.get('error')

  const handleShowPassord = useCallback(() => {
    setShowPassword(!showPassword)
    if (!showPassword) {
      setTypePassword('text')
    } else {
      setTypePassword('password')
    }
  }, [showPassword])

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
        <div className="w-full text-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[80%] h-12 rounded-sm bg-[--bg] pl-2 border-0"
            autoComplete="username"
          />
        </div>
        <div className="relative w-full text-center">
          <input
            type={typePassword}
            name="password"
            placeholder="Password"
            className="w-[80%] h-12 rounded-sm bg-[--bg] pl-2 border-0"
            autoComplete="current-password"
          />
          <div
            className="absolute right-[52px] top-[16px] cursor-pointer"
            onClick={handleShowPassord}
          >
            {showPassword ? <ImEye /> : <ImEyeBlocked />}
          </div>
        </div>
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
