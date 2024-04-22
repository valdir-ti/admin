import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function GoogleButton() {
  return (
    <button
      className="w-[18%] h-12 rounded-sm bg-teal-600 cursor-pointer border-0"
      onClick={() =>
        signIn('google', {
          callbackUrl: '/dashboard'
        })
      }
    >
      <div className="w-full flex items-center justify-center">
        <Image src="/g-icon.png" width={32} height={32} alt="Google Icon" />
      </div>
    </button>
  )
}
