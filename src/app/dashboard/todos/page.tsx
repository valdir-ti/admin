import Link from 'next/link'

import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'
import TodosTableBody from '@/app/dashboard/todos/todosTableBody'

export default async function Page() {
  const data = await getTodosServerAction()

  console.log('todo data => ', { data, date: new Date(), length: data?.length })

  return (
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a todo..." />
        <Link href="/dashboard/todos/add">
          <button className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-lg text-slate-400">
            <td className="w-[50%]">Description</td>
            <td className="w-[15%]">Status</td>
            <td className="w-[15%]">Created At</td>
            <td className="w-[20%]">Actions</td>
          </tr>
        </thead>
        <TodosTableBody data={data} />
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
