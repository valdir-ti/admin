'use client'

import React, { useState } from 'react'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type OrderbyProps = {
  order: string
}

export default function Orderby({ order }: OrderbyProps) {
  const [orderBy, setOrderBy] = useState(order)
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleOrderBy = () => {
    setOrderBy((prev) => {
      const newOrder = prev === 'asc' ? 'desc' : 'asc'

      const params = new URLSearchParams(searchParams)
      params.set('page', '1')
      params.set('order', newOrder)

      replace(`${pathname}?${params}`)

      return newOrder
    })
  }

  return (
    <button
      className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer ml-2 sm:ml-8"
      onClick={handleOrderBy}
      title={`Order ${orderBy ?? 'desc'}`}
    >
      <div className="flex items-center gap-1">
        {`Order`}
        {orderBy === 'asc' ? (
          <MdArrowDropUp size={22} />
        ) : (
          <MdArrowDropDown size={22} />
        )}
      </div>
    </button>
  )
}
