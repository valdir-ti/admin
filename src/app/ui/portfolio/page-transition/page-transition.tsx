'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function PageTransition({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.2,
          ease: 'easeInOut'
        }
      }}
    >
      {children}
    </motion.div>
  )
}
