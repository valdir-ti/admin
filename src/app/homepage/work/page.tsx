'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import WorkSliderButtons from '@/app/ui/portfolio/work-slider-buttons/work-slider-buttons'

import 'swiper/css'

const projects = [
  {
    num: '01',
    title: 'project 01',
    category: 'front end',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt hic atque aut ad cupiditate distinctio ipsa.',
    stack: [{ name: 'html 5' }, { name: 'css 3' }, { name: 'javascript' }],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
  {
    num: '02',
    title: 'project 02',
    category: 'back end',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt hic atque aut ad cupiditate distinctio ipsa.',
    stack: [{ name: 'html 5' }, { name: 'css 3' }, { name: 'javascript' }],
    image: '/assets/work/thumb2.png',
    live: '',
    github: ''
  },
  {
    num: '03',
    title: 'project 03',
    category: 'fullstack',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt hic atque aut ad cupiditate distinctio ipsa.',
    stack: [{ name: 'html 5' }, { name: 'css 3' }, { name: 'javascript' }],
    image: '/assets/work/thumb3.png',
    live: '',
    github: ''
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  function handleSlideChange(swiper: { activeIndex: number }) {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="h-screen flex flex-col justify-between py-2 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-portfolioAccent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, idx) => {
                  return (
                    <li key={idx} className="text-xl text-portfolioAccent">
                      {item.name}
                      {idx !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} title={project.title}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-portfolioAccent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} title={project.title}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-portfolioAccent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, idx) => {
                return (
                  <SwiperSlide key={idx} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#00ff99] hover:bg-portfolioAccent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
