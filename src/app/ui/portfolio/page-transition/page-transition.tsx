'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransition({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: {
            duration: 1,
            delay: 0.4,
            ease: 'easeInOut'
          }
        }}
        className="h-screen w-screen fixed top-0 bg-[#1c1c22] pointer-events-none"
      />
      {children}
    </AnimatePresence>
  )
}
