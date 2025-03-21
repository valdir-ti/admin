import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { Nav } from '../nav/nav'
import MobileNav from '../mobile-nav/mobile-nav'

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold cursor-pointer">
            Valdir Silva
            <span className="text-portfolioAccent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/homepage/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
