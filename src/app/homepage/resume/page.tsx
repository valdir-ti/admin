'use client'

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaPhp
} from 'react-icons/fa'
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRabbitmq
} from 'react-icons/si'
import { DiRedis } from 'react-icons/di'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
  title: 'About me',
  description:
    'Web developer with 10+ years of experience in the IT industry. I have a strong background in FullStack development. I am passionate about creating efficient and scalable web apps.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Valdir Silva'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+55) 11 97045-4108'
    },
    {
      fieldName: 'Experience',
      fieldValue: '10+ years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Brazilian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'valdir.ti@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Portuguese, English'
    }
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Experienced professional with a great history of working in the information technology and services industry. Professional engineering with a focus on FullStack development.',
  items: [
    {
      company: 'Veloon',
      position: 'Senior FullStack Developer',
      duration: '2025 - Current'
    },
    {
      company: 'Veloon',
      position: 'Senior FullStack Developer',
      duration: '2025 - Current'
    },
    {
      company: 'ACT Digital',
      position: 'Senior FullStack Developer',
      duration: '2022 - 2025'
    },
    {
      company: 'Avanade',
      position: 'Software Engineer',
      duration: '2019 - 2022'
    },
    {
      company: 'InHouse Contact Center',
      position: 'Web Developer',
      duration: '2017 - 2019'
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'Degree in System Analysis and Development with a focus on FullStack development. Strong engineering professional with a focus on FullStack development.',
  items: [
    {
      institution: 'Faculdade Anhanguera',
      degree: 'System Analysis',
      duration: '2012 - 2015'
    },
    {
      institution: 'Rocketseat',
      degree: 'Python, React.js, Node.js, Next.js, RN',
      duration: '2019 - 2023'
    },
    {
      institution: 'Udemy',
      degree: 'React.js, Node.js, RN, Next.js',
      duration: 'Since 2017'
    },
    {
      institution: 'Alura',
      degree: 'Python',
      duration: '2023 - 2024'
    }
  ]
}

const skills = {
  title: 'My skills',
  description:
    'Skilled in JavaScript, React.js, Node.js, Next.js, and Tailwind CSS. Strong engineering professional with a focus on FullStack development.',
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <SiTypescript />,
      name: 'typescript'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js'
    },
    {
      icon: <FaPython />,
      name: 'python'
    },
    {
      icon: <FaPhp />,
      name: 'php'
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb'
    },
    {
      icon: <SiMysql />,
      name: 'mysql'
    },
    {
      icon: <SiPostgresql />,
      name: 'postgresql'
    },
    {
      icon: <SiSqlite />,
      name: 'sqllite'
    },
    {
      icon: <FaGithub />,
      name: 'github'
    },
    {
      icon: <DiRedis />,
      name: 'redis'
    },
    {
      icon: <SiRabbitmq />,
      name: 'rabbitmq'
    }
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 2.4, ease: 'easeInOut' }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-portfolioAccent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-portfolioAccent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skill, idx) => {
                      return (
                        <li key={idx}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 mqx-w-[620px] mx-auto xl:mx-0 h-[400px]">
                  {about.info.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
