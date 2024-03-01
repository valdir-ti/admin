import TableWrapper from '@/app/ui/dashboard/table-wrapper/table-wrapper'
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
    <TableWrapper
      link="/dashboard/users/add"
      count={count}
      data={data}
      tableColumns={tableColumns}
      type="users"
      searchPlaceholder="Search for a user..."
    />
  )
}
