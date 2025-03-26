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

export const menuItemsData = [
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
  },
  {
    title: 'Portfolio',
    list: [
      {
        title: 'General',
        path: '/dashboard/portfolio/general',
        icon: <MdOutlineSettings />
      },
      {
        title: 'Services',
        path: '/dashboard/portfolio/services',
        icon: <MdListAlt />
      },
      {
        title: 'Resume',
        path: '/dashboard/portfolio/resume',
        icon: <MdHelpCenter />
      },
      {
        title: 'Work',
        path: '/dashboard/portfolio/work',
        icon: <MdHelpCenter />
      },
      {
        title: 'Contact',
        path: '/dashboard/portfolio/contact',
        icon: <MdHelpCenter />
      }
    ]
  }
]
