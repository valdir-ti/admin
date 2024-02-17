'use client'

import { useState, useRef, useEffect, MouseEvent } from 'react'
import {
  MdNotifications,
  MdOutlineChat,
  MdOutlineManageAccounts,
  MdPublic,
  MdSearch,
  MdOutlineMenu
} from 'react-icons/md'
import { usePathname } from 'next/navigation'

import { useSidebarMobileStore } from '@/store/sidebarMobileStore'
import DropDownMenu from '@/app/ui/dashboard/dropdown-menu/dropdown-menu'

export default function Navbar() {
  const { handleOpen } = useSidebarMobileStore()

  const pathName = usePathname()
  const [isHidden, setIsHidden] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  function handleDropdownMenu() {
    setIsHidden(!isHidden)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsHidden(true)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside as unknown as EventListener
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as unknown as EventListener
      )
    }
  }, [])

  return (
    <div className="flex justify-between p-2 items-center bg-[--bgSoft] rounded-md min-w-full">
      <div className="flex items-center">
        <div className="sm:hidden flex mr-2">
          <MdOutlineMenu onClick={handleOpen} />
        </div>
        <div className="text-[--textSoft] font-bold capitalize">
          {pathName.split('/').pop()}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-3 bg-[--bgHover] rounded-md p-2">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-0 text-[--bgHover] outline-none"
          />
        </div>
        <div className="flex gap-4 relative" ref={dropdownRef}>
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
