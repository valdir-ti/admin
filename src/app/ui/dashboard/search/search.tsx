'use client'

import { MdSearch } from 'react-icons/md'
import { ITEM_PER_PAGE } from '@/utils/itemsPerPage'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type SearchProps = {
  placeholder: string
}

export default function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)

      params.set('page', '1')
      params.set('itemPerPage', ITEM_PER_PAGE)

      if (e.target.value) {
        e.target.value.length > 1 && params.set('q', e.target.value)
      } else {
        params.delete('q')
      }
      replace(`${pathname}?${params}`)
    },
    300
  )

  return (
    <div className="flex items-center gap-3 bg-[--bgHover] rounded-md p-2">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-0 text-[--bgHover] outline-none text-white"
        onChange={handleSearch}
      />
    </div>
  )
}
