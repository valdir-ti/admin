import Image from 'next/image'
import { signIn } from 'next-auth/react'

type SocialButtonProps = {
  alt: string
  icon: string
  signInService: string
}

export default function SocialButton({
  alt,
  icon,
  signInService
}: SocialButtonProps) {
  return (
    <button
      className="w-[18%] h-12 rounded-sm bg-teal-600 cursor-pointer border-0"
      onClick={() =>
        signIn(signInService, {
          callbackUrl: '/dashboard'
        })
      }
    >
      <div className="w-full flex items-center justify-center">
        <Image src={icon} width={32} height={32} alt={alt} />
      </div>
    </button>
  )
}
