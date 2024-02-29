'use client'

import PaginationButton from './pagination-button'
import { ITEMS_PER_PAGE } from '@/utils/itemsPerPage'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

type PaginationProps = {
  count?: number
}

export default function Pagination({ count = 0 }: PaginationProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get('page') || '1'

  const params = new URLSearchParams(searchParams)

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count

  const handleChangePage = (type: string) => {
    const lastPage = count / ITEMS_PER_PAGE

    switch (type) {
      case 'first':
        params.set('page', '1')
        break
      case 'prev':
        params.set('page', String(parseInt(page) - 1))
        break
      case 'next':
        params.set('page', String(parseInt(page) + 1))
        break
      case 'last':
        params.set('page', String(Math.ceil(lastPage)))
        break
    }

    replace(`${pathname}?${params}`)
  }

  return (
    <div className="flex justify-between mt-6 w-full sm:w-3/12">
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
