'use client'

import { differenceInCalendarYears } from 'date-fns'
import { useState, useEffect } from 'react'

import CountUp from 'react-countup'

const Stats = () => {
  const [totalCommits, setTotalCommits] = useState(0)
  const [repoCount, setRepoCount] = useState(0)

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const commitResponse = await fetch(
          'https://api.github.com/search/commits?q=author:valdir-ti'
        )
        const commitResponsedata = await commitResponse.json()
        if (commitResponsedata) {
          setTotalCommits(commitResponsedata.total_count)
        }

        const repoData = await fetch(
          'https://api.github.com/users/valdir-ti/repos'
        )
        const repoDataResponse = await repoData.json()
        if (repoDataResponse) {
          setRepoCount(repoDataResponse.length)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchCommits()
  }, [])

  const yearsExperience = differenceInCalendarYears(
    new Date(),
    new Date(2015, 1, 1)
  )

  const stats = [
    {
      num: yearsExperience,
      text: 'Years of experience',
      title: `${yearsExperience}+ years of experience`
    },
    {
      num: repoCount,
      text: 'Projects on Github',
      title: `${repoCount} projects on github`
    },
    {
      num: 24,
      text: 'Technologies mastered',
      title:
        'JavaScript/TypeScript, Python, JQuery, Github, ReactJS, NextJS, React Native, Node.js, NestJS, Jest, Firebase, MongoDB, MySQL, PostgreSQL, GraphQL, PHP, Gitlab, CI/CD, Sass, Styled Components, Material UI, TailwindCSS, Bootstrap'
    },
    {
      num: totalCommits,
      text: 'Code commits',
      title: `${totalCommits} total code commits`
    }
  ]
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
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
        </div>
      </div>
    </section>
  )
}

export default Stats
