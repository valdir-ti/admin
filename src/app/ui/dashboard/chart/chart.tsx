'use client'

import {
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts'

export default function Chart() {
  const data = [
    {
      name: 'Sun',
      visit: 4000,
      click: 2400
    },
    {
      name: 'Mon',
      visit: 3000,
      click: 1398
    },
    {
      name: 'Tue',
      visit: 2000,
      click: 3800
    },
    {
      name: 'Wed',
      visit: 2780,
      click: 3908
    },
    {
      name: 'Thu',
      visit: 1890,
      click: 4800
    },
    {
      name: 'Fri',
      visit: 2390,
      click: 3800
    },
    {
      name: 'Sat',
      visit: 3490,
      click: 4300
    }
  ]

  return (
    <div className="flex flex-1 flex-col p-4 bg-[--bgSoft] hover:bg-[--bgHover] rounded-md mt-4 h-[400px]">
      <h2 className="text-lg text-[--textSoft] mb-4">Weekly Recap</h2>
      <ResponsiveContainer height="90%" width="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 35,
            left: 20,
            bottom: 10
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: '0' }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
