'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'FullStack Developer',
    description:
      'I create complete web solutions, from interface design to backend and database implementation. I focus on scalability, performance, and usability to meet the specific needs of your project.',
    href: ''
  },
  {
    num: '02',
    title: 'Developer React',
    description:
      'I build modern and interactive interfaces using React. I ensure responsive and optimized design to provide the best user experience across all devices.',
    href: ''
  },
  {
    num: '03',
    title: 'API and Microservices Development',
    description:
      "I create scalable and efficient RESTful APIs and microservices architectures to integrate systems and boost your application's performance.",
    href: ''
  },
  {
    num: '04',
    title: 'Performance and SEO Optimization',
    description:
      "I ensure your website is fast, secure, and optimized for search engines. Improve user experience and increase your business's online visibility.",
    href: ''
  }
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: 'easeInOut' }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-1 justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover translate-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
