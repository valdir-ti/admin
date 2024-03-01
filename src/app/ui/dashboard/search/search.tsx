'use client'

import { useState, useRef } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type SearchProps = {
  placeholder: string
}

export default function Search({ placeholder }: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)

      params.set('page', '1')

      if (e.target.value && e.target.value.length > 1) {
        params.set('q', e.target.value)
        setShowCloseIcon(true)
      } else {
        params.delete('q')
      }
      replace(`${pathname}?${params}`)
    },
    300
  )

  const handleCleanSearch = () => {
    const params = new URLSearchParams(searchParams)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    setShowCloseIcon(false)
    params.set('page', '1')
    params.delete('q')
    replace(`${pathname}?${params}`)
  }

  return (
    <div className="flex items-center gap-3 bg-[--bgHover] rounded-md p-2">
      {!showCloseIcon ? (
        <MdSearch />
      ) : (
        <MdClose className="cursor-pointer" onClick={handleCleanSearch} />
      )}
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-0 text-[--bgHover] outline-none text-white"
        onChange={handleSearch}
      />
    </div>
  )
}
