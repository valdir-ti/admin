import { motion } from 'framer-motion'

const STAIR_TOTAL_STEPS = 6

const stairAnimation = {
  initial: { top: '0%' },
  animate: { top: '100%' },
  exit: { top: ['100%', '0%'] }
}

const reverseIndex = (index: number) => {
  const totalSteps = STAIR_TOTAL_STEPS
  return totalSteps - index - 1
}

const Stairs = () => {
  return (
    <>
      {[...Array(STAIR_TOTAL_STEPS)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              delay: reverseIndex(index) * 0.1,
              ease: 'easeInOut'
            }}
            className="h-full w-full bg-white relative"
          />
        )
      })}
    </>
  )
}

export default Stairs
