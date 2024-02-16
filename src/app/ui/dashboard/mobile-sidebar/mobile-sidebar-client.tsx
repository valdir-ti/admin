'use client'

import Image from 'next/image'
import { MdClose } from 'react-icons/md'

import { TypesColors } from '@/app/enum/typeColors'
import { menuItemsData } from '@/app/utils/menuItemsData'
import MenuLink from '@/app/ui/dashboard/menuLink/menulink'
import { useSidebarMobileStore } from '@/app/store/sidebarMobileStore'
import LogoutButton from '@/app/ui/dashboard/logout-button/logout-button'

type MobileSidebarClientProps = {
  session: {
    user: {
      name: string
      email?: string
      image: string
    }
    expires: string
    image: string
  } | null
}

export default function MobileSidebarClient({
  session
}: MobileSidebarClientProps) {
  const { handleOpen, open } = useSidebarMobileStore()

  return (
    <div
      className={`${
        !open ? 'left-[-200px]' : 'left-[0px]'
      } inline-block sm:hidden absolute min-w-[200px] bg-[--bg] min-h-screen z-10 rounded-md`}
    >
      <div className="flex justify-end p-2">
        <MdClose onClick={handleOpen} />
      </div>

      <div className="flex gap-4 mb-4 ml-2 items-center">
        <Image
          src={session?.user?.image || '/noavatar.png'}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-cover cursor-pointer max-h-[50px]"
        />
        <div className="flex flex-col">
          <span className="font-bold">
            {session?.user?.name || 'User name'}
          </span>
          <span className="text-sm text-[--textSoft]">Administrator</span>
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
