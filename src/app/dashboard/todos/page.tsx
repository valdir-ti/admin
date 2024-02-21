import Link from 'next/link'

import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import TodosTableBody from '@/app/dashboard/todos/todosTableBody'
import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'

export const revalidate = 30

export default async function Page() {
  const data = await getTodosServerAction()

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
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead>
            <tr className="text-lg text-slate-400">
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Creation
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <TodosTableBody data={data} />
        </table>
        <Pagination disabled={true} />
      </div>
    </div>
  )
}
