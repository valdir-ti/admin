'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type MenuLinkProps = {
  item: {
    path: string
    icon: ReactNode
    title: string
  }
}

export default function MenuLink({ item }: MenuLinkProps) {
  const pathName = usePathname()

  const { path, icon, title } = item

  return (
    <Link
      href={path}
      className={`p-3 flex items-center gap-3 m-1 rounded-md hover:bg-[--bgHover] ${
        pathName === path && 'bg-[--bgHover]'
      }`}
    >
      {icon}
      {title}
    </Link>
  )
}
