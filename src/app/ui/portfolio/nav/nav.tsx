'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' }
]

export const Nav = () => {
  const pathName = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            key={idx}
            href={link.path}
            className={`${pathName === link.path && 'text-portfolioAccent border-b-2 border-portfolioAccent'} capitalize font-medium hover:text-portfolioAccent transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
