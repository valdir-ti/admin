'use client'

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch
} from 'react-icons/md'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathName = usePathname()

  return (
    <div className="flex justify-between p-2 items-center bg-[--bgSoft] rounded-md min-w-full">
      <div className="text-[--textSoft] font-bold capitalize">
        {pathName.split('/').pop()}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-[--bgHover] rounded-md p-2">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-0 text-[--bgHover] outline-none"
          />
        </div>
        <div className="flex gap-4">
          <MdOutlineChat size={20} className="cursor-pointer" />
          <MdNotifications size={20} className="cursor-pointer" />
          <MdPublic size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
