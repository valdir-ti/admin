'use client'

import Image from 'next/image'

import { TypesColors } from '@/enum/typeColors'
import { menuItemsData } from '@/utils/menuItemsData'
import MenuLink from '@/app/ui/dashboard/menuLink/menulink'
import LogoutButton from '@/app/ui/dashboard/logout-button/logout-button'
import { useSession } from 'next-auth/react'
import { formatName } from '@/utils/formatName'

export default function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="sticky">
      <div className="flex gap-4 mb-4 ml-2 items-center">
        <Image
          src={session?.user?.image || '/noavatar.png'}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-cover cursor-pointer max-h-[50px] w-[50px] h-[50px]"
        />
        <div className="flex flex-col">
          <span className="font-bold">
            {formatName(session?.user?.name || 'User name')}
          </span>
          <span className="text-sm text-[--textSoft]">User</span>
        </div>
      </div>
      <ul className="">
        {menuItemsData.map((cat) => (
          <li
            key={cat.title}
            className="text-[--textSoft] font-bold text-sm m-2"
          >
            <span>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>

      <LogoutButton color={TypesColors.primary} />
    </div>
  )
}
