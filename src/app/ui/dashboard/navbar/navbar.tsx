'use client'

import { useState } from 'react'
import {
  MdNotifications,
  MdOutlineChat,
  MdOutlineManageAccounts,
  MdPublic,
  MdSearch
} from 'react-icons/md'
import { usePathname } from 'next/navigation'
import DropDownMenu from '@/app/ui/dashboard/dropdown-menu/dropdown-menu'

export default function Navbar() {
  const pathName = usePathname()

  const [isHidden, setIsHidden] = useState(true)

  function handleDropdownMenu() {
    setIsHidden(!isHidden)
  }

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
        <div className="flex gap-4 relative">
          <MdOutlineChat size={20} className="cursor-pointer" />
          <MdNotifications size={20} className="cursor-pointer" />
          <MdPublic size={20} className="cursor-pointer" />
          <MdOutlineManageAccounts
            size={20}
            className="cursor-pointer mr-2"
            onClick={handleDropdownMenu}
          />
          <DropDownMenu isHidden={isHidden} />
        </div>
      </div>
    </div>
  )
}
