import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'
import { getUsersServerAction } from '@/app/actions/users/get-users-action'
import { getProductsServerAction } from '@/app/actions/products/get-products-action'

import Card from '@/app/ui/dashboard/card/card'
import Chart from '@/app/ui/dashboard/chart/chart'
import RightBar from '@/app/ui/dashboard/rightbar/rightbar'
import Transactions from '@/app/ui/dashboard/transactions/transactions'

export default async function Home() {
  const users = await getUsersServerAction()
  const todos = await getTodosServerAction()
  const products = await getProductsServerAction()

  return (
    <div className="flex justify-between gap-4 mt-2 sm:mt-4 flex-col lg:flex-row">
      <div className="w-full lg:w-9/12 sm:gap-2">
        <div className="flex justify-between gap-1">
          <Card itemName="Users" items={users} />
          <Card itemName="Products" items={products} />
          <Card itemName="Todos" items={todos} />
        </div>
        <div>
          <Transactions />
        </div>
        <div className="flex">
          <Chart />
        </div>
      </div>
      <div className="lg:w-3/12 w-full pr-1">
        <RightBar />
      </div>
    </div>
  )
}
