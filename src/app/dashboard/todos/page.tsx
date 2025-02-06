import TableWrapper from '@/app/ui/dashboard/table-wrapper/table-wrapper'
import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'

type HomeProps = {
  searchParams: {
    q: string
    page: string
    order: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const q = searchParams?.q || ''
  const page = searchParams?.page || '1'
  const order = searchParams?.order || 'desc'

  const todosData = await getTodosServerAction({ q, page, order })
  const { count, data } = todosData

  const tableColumns = ['Title', 'Description', 'Status', 'Creation', 'Actions']

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
