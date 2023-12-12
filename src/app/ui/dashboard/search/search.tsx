import { MdSearch } from 'react-icons/md'

type SearchProps = {
  placeholder: string
}

export default function Search({ placeholder }: SearchProps) {
  return (
    <div className="flex items-center gap-3 bg-[--bgHover] rounded-md p-2">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-0 text-[--bgHover] outline-none"
      />
    </div>
  )
}
