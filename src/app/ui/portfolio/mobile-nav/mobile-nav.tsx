'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'

import { links } from '@/utils/links'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-portfolioAccent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="text-white mt-16 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold cursor-pointer">
              Valdir Silva
              <span className="text-portfolioAccent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col gap-4 justify-center items-center text-white">
          {links.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={link.path}
                className={`${pathName === link.path && 'text-portfolioAccent border-b-2 border-portfolioAccent'} text-xl capitalize hover:text-portfolioAccent transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
