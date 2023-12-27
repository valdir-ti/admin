import Link from 'next/link'

import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'
import TodosTableBody from '@/app/ui/dashboard/todosTableBody/todosTableBody'

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
      <table className="w-full">
        <thead>
          <tr>
            <td>Description</td>
            <td>Status</td>
            <td>Created At</td>
          </tr>
        </thead>
        <TodosTableBody data={data} />
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
