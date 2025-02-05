import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'
import { getUsersServerAction } from '@/app/actions/users/get-users-action'
import { getProductsServerAction } from '@/app/actions/products/get-products-action'

import Chart from '@/app/ui/dashboard/chart/chart'
import RightBar from '@/app/ui/dashboard/rightbar/rightbar'
import Transactions from '@/app/ui/dashboard/transactions/transactions'
import CardDragContainer from '../ui/dashboard/card/card-drag-container'

export default async function Home() {
  const usersData = await getUsersServerAction('', '')
  const todosData = await getTodosServerAction({
    q: '',
    page: '1',
    order: 'desc'
  })
  const productsData = await getProductsServerAction('', '')

  const cards = [
    { index: 'Users', data: usersData },
    { index: 'Products', data: productsData },
    { index: 'Todos', data: todosData }
  ]

  return (
    <div className="flex justify-between gap-4 mt-2 sm:mt-4 flex-col lg:flex-row">
      <div className="w-full lg:9/12 gap-2">
        <div className="flex justify-between gap-2 flex-row">
          <CardDragContainer data={cards} />
        </div>
        <div className="flex gap-2">
          <Transactions />
        </div>
        <div className="flex gap-2">
          <Chart />
        </div>
      </div>
      <div className="w-full lg:w-3/12 pr-1">
        <RightBar />
      </div>
    </div>
  )
}
