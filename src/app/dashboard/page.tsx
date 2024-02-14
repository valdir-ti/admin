import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'
import { getUsersServerAction } from '@/app/actions/users/get-users-action'
import { getProductsServerAction } from '@/app/actions/products/get-products-action'

import Card from '@/app/ui/dashboard/card/card'
import Chart from '@/app/ui/dashboard/chart/chart'
import RightBar from '@/app/ui/dashboard/rightbar/rightbar'
import Transactions from '@/app/ui/dashboard/transactions/transactions'

export default async function Home() {
  const users = await getUsersServerAction()
  const products = await getProductsServerAction()
  const todos = await getTodosServerAction()

  return (
    <div className="flex justify-between gap-4 mt-4">
      <div className="w-9/12 gap-2">
        <div className="flex justify-between">
          <Card item="Users" total={users.length} />
          <Card item="Products" total={products.length} />
          <Card item="Todos" total={todos.length} />
        </div>
        <div>
          <Transactions />
        </div>
        <div>
          <Chart />
        </div>
      </div>
      <div className="w-3/12 pr-1">
        <RightBar />
      </div>
    </div>
  )
}
