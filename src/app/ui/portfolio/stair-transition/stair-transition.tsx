'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import Stairs from '../stairs/stairs'

const StairTransition = () => {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed top-0 bg-[#1c1c22] pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                duration: 1,
                delay: 0.4,
                ease: 'easeInOut'
              }
            }}
          />
        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition
