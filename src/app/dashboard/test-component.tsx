'use client'

import { Reorder } from 'framer-motion'
import { useState } from 'react'

export default function TestComponent() {
  const [items, setItems] = useState([1, 2, 3])

  const handleReorder = (data: any) => {
    localStorage.setItem('cardsOrder', JSON.stringify(data))
    setItems(data)
  }
  return (
    <Reorder.Group
      axis="x"
      values={items}
      onReorder={handleReorder}
      className="flex justify-between gap-20 bg-red-100 w-full"
    >
      {items.map((item) => (
        <Reorder.Item value={item} key={item}>
          <div className="bg-teal-300">
            <div>
              <h2>Card: {item}</h2>
            </div>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
