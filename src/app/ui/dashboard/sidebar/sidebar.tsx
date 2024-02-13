import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdListAlt,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork
} from 'react-icons/md'
import MenuLink from '../menuLink/menulink'
import Image from 'next/image'
import { auth, signOut } from '../../../../../auth'

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

      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button className="flex items-center p-3 m-2 gap-2 cursor-pointer rounded-md text-[--textSoft] font-bold text-sm hover:bg-[--bgHover] bg-transparent border-0 w-[88%] ml-4">
          <MdLogout />
          <div className="hidden md:block">Log Out</div>
        </button>
      </form>
    </div>
  )
}
