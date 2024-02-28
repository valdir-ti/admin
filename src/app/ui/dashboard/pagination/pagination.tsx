'use client'

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
    type === 'prev'
      ? params.set('page', String(parseInt(page) - 1))
      : params.set('page', String(parseInt(page) + 1))
    replace(`${pathname}?${params}`)
  }

  return (
    <div className="flex justify-between mt-6">
      <button
        className={`p-1 rounded-sm min-w-[100px] ${
          !hasPrev
            ? 'bg-gray-500 text-gray-950 cursor-not-allowed'
            : 'bg-white text-black cursor-pointer'
        }`}
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className={`p-1 rounded-sm min-w-[100px] ${
          !hasNext
            ? 'bg-gray-500 text-gray-950 cursor-not-allowed'
            : 'bg-white text-black cursor-pointer'
        }`}
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  )
}
