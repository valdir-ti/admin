import Link from 'next/link'

import Table from '@/app/ui/dashboard/table/table'
import Search from '@/app/ui/dashboard/search/search'
import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'

export const revalidate = 30

export default async function Page() {
  const data = await getTodosServerAction()

  const tableColumns = ['Description', 'Status', 'Creation', 'Actions']

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
      <Table columns={tableColumns} data={data} type="todos" />
    </div>
  )
}
