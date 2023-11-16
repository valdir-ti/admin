import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from 'react-icons/md'
import MenuLink from '../menuLink/page';
import Image from 'next/image';

export default function Sidebar() {

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className="sticky">
      <div className='flex gap-4 mb-4 items-center'>
        <Image 
          src='/noavatar.png' 
          alt='avatar'
          width={50} 
          height={50} 
          className='rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <span className='font-bold'>Valdir Silva</span>
          <span className='text-sm text-[--textSoft]'>Administrator</span>
        </div>
      </div>
      <ul className=''>
        {menuItems.map(cat => (
          <li key={cat.title} className='text-[--textSoft] font-bold text-sm m-2'>
            <span>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className='flex items-center p-3 m-2 gap-2 cursor-pointer rounded-md text-[--textSoft] font-bold text-sm hover:bg-[--bgHover] bg-transparent border-0 w-[90%] ml-4'>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}
