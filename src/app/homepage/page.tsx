import { FiDownload } from 'react-icons/fi'

import { Button } from '@/components/ui/button'

import Photo from '../ui/portfolio/photo/photo'
import Stats from '../ui/portfolio/stats/stats'
import Socials from '../ui/portfolio/socials/socials'

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I&apos;m <br />{' '}
            <span className="text-portfolioAccent">Valdir Silva</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting elegant digital experiences and I am proeficient
            in various programming language and technologies.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 p-2 px-6"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-portfolioAccent rounded-full flex justify-center items-center text-portfolioAccent text-base hover:bg-portfolioAccent hover:bg-[#00ff99] hover:text-[#1c1c22] hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  )
}
