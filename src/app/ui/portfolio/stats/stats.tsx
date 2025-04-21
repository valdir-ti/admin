import { differenceInCalendarYears } from 'date-fns'
import { Suspense } from 'react'
import CountUpComponent from './CountUp'

async function fetchGithubData() {
  const headers = {
    Accept: 'application/vnd.github.cloak-preview',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const commitResponse = await fetch(
    'https://api.github.com/search/commits?q=author:valdir-ti',
    { headers }
  )
  const commitData = await commitResponse.json()

  const repoResponse = await fetch(
    'https://api.github.com/users/valdir-ti/repos',
    { headers }
  )
  const repoData = await repoResponse.json()

  return { commitData, repoData }
}

export default async function Stats() {
  const { commitData, repoData } = await fetchGithubData()

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
      num: repoData.length,
      text: 'Projects on Github',
      title: `${repoData.length} projects on github`
    },
    {
      num: 24,
      text: 'Technologies mastered',
      title:
        'JavaScript/TypeScript, Python, JQuery, Github, ReactJS, NextJS, React Native, Node.js, NestJS, Jest, Firebase, MongoDB, MySQL, PostgreSQL, GraphQL, PHP, Gitlab, CI/CD, Sass, Styled Components, Material UI, TailwindCSS, Bootstrap'
    },
    {
      num: commitData.total_count,
      text: 'Code commits',
      title: `${commitData.total_count} total code commits`
    }
  ]
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          <Suspense fallback={<p>Loading...</p>}>
            <CountUpComponent stats={stats} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
