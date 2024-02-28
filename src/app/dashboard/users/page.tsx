import Link from 'next/link'

import Table from '@/app/ui/dashboard/table/table'
import Search from '@/app/ui/dashboard/search/search'
import { getUsersServerAction } from '@/app/actions/users/get-users-action'

type HomeProps = {
  searchParams: {
    q: string
    page: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const q = searchParams?.q || ''
  const page = searchParams?.page || '1'

  const usersData = await getUsersServerAction(q, page)
  const { count, data } = usersData

  const tableColumns = [
    'Name',
    'Email',
    'Creation',
    'Role',
    'Status',
    'Actions'
  ]

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
      <Table columns={tableColumns} data={data} type="users" count={count} />
    </div>
  )
}
