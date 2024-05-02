'use client'

import { useState } from 'react'
import { Reorder } from 'framer-motion'

import Card, { CardProps } from './card'

interface UserData {
  _id: string
  name: string
  email: string
  isAdmin: boolean
  isActive: boolean
  createdAt: string
  image?: string
}

interface TodoData {
  _id: string
  description: string
  done: boolean
  createdAt: string
}

interface ProductData {
  _id: string
  title: string
  description: string
  price: number
  stock: number
  category: string
  isActive: boolean
  image?: string
  createdAt: string
  size?: number
}

interface DataProps {
  count: number
  totalDone?: number
  totalOpen?: number
  data: (UserData | TodoData | ProductData)[]
}

export interface DataItem {
  index: string
  data: DataProps
}

type CardDragContainerProps = {
  data: { index: string; data: CardProps[] }[]
}

export default function CardDragContainer({ data }: CardDragContainerProps) {
  const storedIndicesString = localStorage.getItem('cardsOrder')
  const initialItems = storedIndicesString
    ? JSON.parse(storedIndicesString).map((index: string) =>
        data.find((item) => item.index === index)
      )
    : data
  const [items, setItems] = useState(initialItems)

  const handleReorder = (data: DataItem[]) => {
    const indices = data?.map((item) => item.index)
    localStorage.setItem('cardsOrder', JSON.stringify(indices))
    setItems(data)
  }

  return (
    <div className="flex w-full gap-4">
      <Reorder.Group
        axis="x"
        values={items}
        onReorder={handleReorder}
        className="grid grid-cols-3 w-full gap-4"
      >
        {items.map((item: DataItem) => (
          <Reorder.Item
            value={item}
            key={item.index}
            className="bg-[--bgSoft] hover:bg-[--bgHover] p-[4px] sm:p-4 rounded-md min-w-[32%]"
          >
            <Card item={item.data} itemName={item.index} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
