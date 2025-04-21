'use client'

import CountUp from 'react-countup'

type Stat = {
  num: number
  text: string
  title: string
}

export default function CountUpComponent({ stats }: { stats: Stat[] }) {
  return (
    <>
      {stats.map((stat, index) => {
        return (
          <div
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            key={index}
            title={stat.title}
          >
            <CountUp
              end={stat.num}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p
              className={`${stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
            >
              {stat.text}
            </p>
          </div>
        )
      })}
    </>
  )
}
