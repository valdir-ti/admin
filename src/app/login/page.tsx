'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { loginUserServerAction } from '@/app/actions/users/login-user-action'

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(
    loginUserServerAction,
    undefined
  )

  return (
    <div className="grid place-content-center h-screen w-full">
      <form
        action={dispatch}
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
        <LoginButton />
        <span>
          {errorMessage && (
            <>
              {' '}
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </span>
      </form>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="w-[80%] h-12 rounded-sm bg-teal-600 pl-2 border-0 mt-2"
      aria-disabled={pending}
    >
      Log in
    </button>
  )
}
