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
    title: 'Intratec Tecnologia',
    category: 'front end',
    description:
      "Project developed to demonstrate the company's services and products. The project was developed using Next.js, TypeScript, and Tailwind CSS.",
    stack: [
      { name: 'nextjs' },
      { name: 'typescript' },
      { name: 'tailwindcss' }
    ],
    image: '/assets/work/project1.png',
    live: 'https://intratec.dev.br',
    github: 'https://github.com/valdir-ti/admin'
  },
  {
    num: '02',
    title: 'Exercise Gym',
    category: 'back end',
    description:
      'Exercise Gym is a web application that allows users to search for exercises and create their own workout routines. The project was developed using React, Material UI, and JavaScript.',
    stack: [{ name: 'react' }, { name: 'material-ui' }, { name: 'javascript' }],
    image: '/assets/work/project2.png',
    live: 'https://exercise-gym.netlify.app/',
    github: 'https://github.com/valdir-ti/gym_exercises'
  },
  {
    num: '03',
    title: 'Admin Intratec Tecnologia',
    category: 'fullStack app',
    description:
      'This project is an admin panel for the Intratec Tecnologia website. The project was developed using Next.js, TypeScript, and Tailwind CSS.',
    stack: [
      { name: 'nextjs' },
      { name: 'typescript' },
      { name: 'tailwindcss' }
    ],
    image: '/assets/work/project3.png',
    live: 'https://intratec.dev.br/dashboard',
    github: 'https://github.com/valdir-ti/admin'
  },
  {
    num: '04',
    title: 'Intratec Web App',
    category: 'fullstack app',
    description:
      'This project is a web application that allows users to create and manage their own projects. The project was developed using React, Firebase, and TypeScript.',
    stack: [
      { name: 'react' },
      { name: 'firebase' },
      { name: 'typescript' },
      { name: 'material' },
      { name: 'supabase' }
    ],
    image: '/assets/work/project4.png',
    live: 'https://intratec-web.netlify.app/',
    github: 'https://github.com/valdir-ti/intratec-web'
  },
  {
    num: '05',
    title: 'Netflix Clone',
    category: 'fullstack app',
    description:
      'This project is a web application that allows users to create and manage their own projects. The project was developed using React, Firebase, and TypeScript.',
    stack: [{ name: 'react' }, { name: 'javascript' }, { name: 'axios' }],
    image: '/assets/work/project5.png',
    live: 'https://netflix-clone-gamma.vercel.app/',
    github: 'https://github.com/valdir-ti/netflix-clone'
  },
  {
    num: '06',
    title: 'BookApp',
    category: 'fullstack app',
    description:
      'BookApp is a web application that allows users to search for books and create their own book lists. The project was developed using React, Firebase, and TypeScript.',
    stack: [{ name: 'react' }, { name: 'javascript' }, { name: 'axios' }],
    image: '/assets/work/project6.png',
    live: 'https://bookapp-intratec.vercel.app/',
    github: 'https://github.com/valdir-ti/bookapp'
  },
  {
    num: '07',
    title: 'First Portfolio Project',
    category: 'fullstack app',
    description:
      'BookApp is a web application that allows users to search for books and create their own book lists. The project was developed using React, Firebase, and TypeScript.',
    stack: [{ name: 'vite' }, { name: 'typescript' }, { name: 'tailwindcss' }],
    image: '/assets/work/project7.png',
    live: 'https://portfolio-lovat-omega-47.vercel.app/',
    github: 'https://github.com/valdir-ti/portfolio'
  },
  {
    num: '08',
    title: 'DT Money',
    category: 'frontend app',
    description:
      'DT Money is a web application that allows users to manage their finances. The project was developed using React and TypeScript.',
    stack: [{ name: 'react' }, { name: 'typescript' }],
    image: '/assets/work/project8.png',
    live: 'https://dt-money-gules.vercel.app/',
    github: 'https://github.com/valdir-ti/dt-money'
  },
  {
    num: '09',
    title: 'ChatGPT Clone',
    category: 'frontend app',
    description:
      'ChatGPT Clone is a web application that allows users to chat with an AI. The project was developed using React and TypeScript.',
    stack: [{ name: 'next' }, { name: 'typescript' }, { name: 'tailwindcss' }],
    image: '/assets/work/project9.png',
    live: 'https://chatgpt-clone-iota-ecru.vercel.app/',
    github: 'https://github.com/valdir-ti/chatgpt-clone'
  },
  {
    num: '10',
    title: 'Car Showcase',
    category: 'frontend app',
    description:
      'Car Showcase is a web application that allows users to showcase their cars. The project was developed using React and TypeScript.',
    stack: [{ name: 'next' }, { name: 'typescript' }, { name: 'tailwindcss' }],
    image: '/assets/work/project10.png',
    live: 'https://car-showcase-five.vercel.app/',
    github: 'https://github.com/valdir-ti/car-showcase'
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
      className="h-auto max-sm:h-screen flex flex-col justify-between py-2 xl:px-0"
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
                <Link href={project.live} title={project.title} target="_blank">
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
                <Link
                  href={project.github}
                  title={project.title}
                  target="_blank"
                >
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
