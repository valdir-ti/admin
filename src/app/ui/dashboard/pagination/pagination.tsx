'use client'

import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import PaginationButton from './pagination-button'
import { ITEMS_PER_PAGE, TODOS_PER_PAGE } from '@/utils/itemsPerPage'

type PaginationProps = {
  count: number
  type: string
}

export default function Pagination({ count = 0, type }: PaginationProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const page = searchParams.get('page') || '1'

  const [currentPage, setCurrentPage] = useState(parseInt(page))

  useEffect(() => {
    setCurrentPage(parseInt(page))
  }, [page])

  const params = new URLSearchParams(searchParams)

  let hasPrev = false
  let hasNext = false
  let lastPage = 0

  if (type === 'todos') {
    hasPrev = TODOS_PER_PAGE * (parseInt(page) - 1) > 0
    hasNext = TODOS_PER_PAGE * (parseInt(page) - 1) + TODOS_PER_PAGE < count
    lastPage = count / TODOS_PER_PAGE
  } else {
    hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0
    hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count
    lastPage = count / ITEMS_PER_PAGE
  }

  const handleChangePage = useDebouncedCallback((type: string) => {
    switch (type) {
      case 'first':
        params.set('page', '1')
        setCurrentPage(1)
        break
      case 'prev':
        params.set('page', String(parseInt(page) - 1))
        setCurrentPage(parseInt(page) - 1)
        break
      case 'next':
        params.set('page', String(parseInt(page) + 1))
        setCurrentPage(parseInt(page) + 1)
        break
      case 'last':
        params.set('page', String(Math.ceil(lastPage)))
        setCurrentPage(Math.ceil(lastPage))
        break
    }

    replace(`${pathname}?${params}`)
  }, 300)

  return (
    <div className="flex justify-between mt-16 mb-6 w-full sm:w-3/12">
      <PaginationButton
        disabled={!hasPrev}
        handleChangePage={() => handleChangePage('first')}
        title="First Page"
        type="first"
      />
      <PaginationButton
        disabled={!hasPrev}
        handleChangePage={() => handleChangePage('prev')}
        title="Previous Page"
        type="prev"
      />
      <div className="">
        {currentPage} of {Math.ceil(lastPage)}
      </div>
      <PaginationButton
        disabled={!hasNext}
        handleChangePage={() => handleChangePage('next')}
        title="Next Page"
        type="next"
      />
      <PaginationButton
        disabled={!hasNext}
        handleChangePage={() => handleChangePage('last')}
        title="Last Page"
        type="last"
      />
    </div>
  )
}
