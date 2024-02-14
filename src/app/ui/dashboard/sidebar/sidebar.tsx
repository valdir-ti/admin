import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdListAlt,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork
} from 'react-icons/md'
import Image from 'next/image'

import { auth } from '@/app/auth'
import MenuLink from '@/app/ui/dashboard/menuLink/menulink'
import LogoutButton from '@/app/ui/dashboard/logout-button/logout-button'

export default async function Sidebar() {
  const session = await auth()

  const menuItems = [
    {
      title: 'Pages',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard',
          icon: <MdDashboard />
        },
        {
          title: 'Users',
          path: '/dashboard/users',
          icon: <MdSupervisedUserCircle />
        },
        {
          title: 'Products',
          path: '/dashboard/products',
          icon: <MdShoppingBag />
        },
        {
          title: 'Transactions',
          path: '/dashboard/transactions',
          icon: <MdAttachMoney />
        }
      ]
    },
    {
      title: 'Analytics',
      list: [
        {
          title: 'Revenue',
          path: '/dashboard/revenue',
          icon: <MdWork />
        },
        {
          title: 'Reports',
          path: '/dashboard/reports',
          icon: <MdAnalytics />
        },
        {
          title: 'Teams',
          path: '/dashboard/teams',
          icon: <MdPeople />
        }
      ]
    },
    {
      title: 'User',
      list: [
        {
          title: 'Settings',
          path: '/dashboard/settings',
          icon: <MdOutlineSettings />
        },
        {
          title: 'Todos',
          path: '/dashboard/todos',
          icon: <MdListAlt />
        },
        {
          title: 'Help',
          path: '/dashboard/help',
          icon: <MdHelpCenter />
        }
      ]
    }
  ]

  return (
    <div className="sticky">
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
        {menuItems.map((cat) => (
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

      <LogoutButton />
    </div>
  )
}
