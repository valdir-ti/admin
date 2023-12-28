import Link from 'next/link'

import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import UsersTableBody from '@/app/dashboard/users/usersTableBody'
import { getUsersServerAction } from '@/app/actions/users/get-users-action'

export default async function Home() {
  const data = await getUsersServerAction()

  return (
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-lg text-slate-400">
            <td className="w-[25%]">Name</td>
            <td className="w-[25%]">Email</td>
            <td className="w-[10%]">Created At</td>
            <td className="w-[10%]">Role</td>
            <td className="w-[10%]">Status</td>
            <td className="w-[15%]">Actions</td>
          </tr>
        </thead>
        <UsersTableBody data={data} />
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
