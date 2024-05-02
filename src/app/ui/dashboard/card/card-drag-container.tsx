'use client'

import { useState } from 'react'
import { Reorder } from 'framer-motion'

import Card from './card'
import { CardDragContainerProps, CardProps } from '@/types/card'

export default function CardDragContainer({ data }: CardDragContainerProps) {
  const storedIndicesString = localStorage.getItem('cardsOrder')
  const initialItems = storedIndicesString
    ? JSON.parse(storedIndicesString).map((index: string) =>
        data.find((item) => item.index === index)
      )
    : data
  const [items, setItems] = useState(initialItems)

  const handleReorder = (data: CardProps[]) => {
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
        {items.map((item: CardProps) => (
          <Reorder.Item
            value={item}
            key={item.index}
            className="bg-[--bgSoft] hover:bg-[--bgHover] p-[4px] sm:p-4 rounded-md min-w-[32%]"
          >
            <Card data={item.data} index={item.index} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
