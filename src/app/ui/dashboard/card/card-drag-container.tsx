'use client'

import { useState, useEffect } from 'react'
import { Reorder } from 'framer-motion'

import Card from './card'
import { CardDragContainerProps, CardProps } from '@/types/card'

export default function CardDragContainer({ data }: CardDragContainerProps) {
  const [items, setItems] = useState<CardProps[]>([])
  const [loading, setLoading] = useState(true)

  const handleReorder = (data: CardProps[]) => {
    const indices = data?.map((item) => item.index)
    localStorage.setItem('cardsOrder', JSON.stringify(indices))
    setItems(data)
  }

  useEffect(() => {
    const storedIndicesString = localStorage.getItem('cardsOrder')

    if (storedIndicesString) {
      const storedIndices = JSON.parse(storedIndicesString)
      const orderedItems = storedIndices
        .map((index: string) => data.find((item) => item.index === index))
        .filter(Boolean) as CardProps[]
      setItems(orderedItems)
    } else {
      setItems(data)
    }

    setLoading(false)
  }, [data])

  return (
    <div className="flex w-full gap-4">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <p>Loading...</p>
        </div>
      ) : (
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
              className="bg-[--bgSoft] hover:bg-[--bgHover] p-[4px] sm:p-4 rounded-md min-w-[32%] cursor-grab"
            >
              <Card data={item.data} index={item.index} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}
    </div>
  )
}
