'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ITEM_PER_PAGE } from '@/utils/itemsPerPage'

type PaginationProps = {
  disabled: boolean
  count: number
}

export default function Pagination({ disabled, count }: PaginationProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get('page') || '1'

  const params = new URLSearchParams(searchParams)

  const hasPrev = parseInt(ITEM_PER_PAGE) * (parseInt(page) - 1) > 0
  const hasNext =
    parseInt(ITEM_PER_PAGE) * (parseInt(page) - 1) + parseInt(ITEM_PER_PAGE) <
    count

  const handleChangePage = (type: string) => {
    let pageData
    type === 'prev'
      ? (pageData = parseInt(page) - 1)
      : (pageData = parseInt(page) + 1)

    params.set('itemsPerPage', ITEM_PER_PAGE)
    params.set('page', String(pageData))
    replace(`${pathname}?${params}`)
  }

  return (
    <div className="flex justify-between mt-6">
      <button
        className={`p-1 rounded-sm min-w-[100px] ${
          disabled
            ? 'bg-gray-500 text-gray-950'
            : 'bg-whit e text-black cursor-pointer'
        }`}
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className="p-1 cursor-pointer rounded-sm min-w-[100px] bg-white text-black"
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  )
}
