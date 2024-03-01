import Pagination from '../pagination/pagination'
import TodosTableBody from '@/app/dashboard/todos/todosTableBody'
import UsersTableBody from '@/app/dashboard/users/usersTableBody'
import ProductsTableBody from '@/app/dashboard/products/productsTableBody'

type TableProps = {
  columns: string[]
  data: unknown[]
  type: string
  count?: number
}

export default function Table({ columns, data, type, count }: TableProps) {
  let TableBodyComponent: React.FC<{ data: unknown[] }> | null = null

  switch (type) {
    case 'products':
      TableBodyComponent = ProductsTableBody as React.FC<{ data: unknown[] }>
      break
    case 'todos':
      TableBodyComponent = TodosTableBody as React.FC<{ data: unknown[] }>
      break
    case 'users':
      TableBodyComponent = UsersTableBody as React.FC<{ data: unknown[] }>
      break
    default:
      TableBodyComponent = () => (<div>No data</div>) as JSX.Element
      break
  }

  return (
    <>
      <div className="relative overflow-x-auto h-[85%] sm:h-[75%]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-lg text-slate-400">
              {columns.map((item) => (
                <th key={item} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          {TableBodyComponent && <TableBodyComponent data={data} />}
        </table>
      </div>
      <div>
        <Pagination count={count} />
      </div>
    </>
  )
}
