import TableWrapper from '@/app/ui/dashboard/table-wrapper/table-wrapper'
import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'

type HomeProps = {
  searchParams: {
    q: string
    page: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const q = searchParams?.q || ''
  const page = searchParams?.page || '1'

  const todosData = await getTodosServerAction(q, page)
  const { count, data } = todosData

  const tableColumns = ['Description', 'Status', 'Creation', 'Actions']

  return (
    <TableWrapper
      link="/dashboard/todos/add"
      count={count}
      data={data}
      tableColumns={tableColumns}
      type="todos"
      searchPlaceholder="Search for a todo..."
    />
  )
}
