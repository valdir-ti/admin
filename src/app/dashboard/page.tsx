import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { getTodosServerAction } from '@/app/actions/todos/get-todos-action'
import { getUsersServerAction } from '@/app/actions/users/get-users-action'
import { getProductsServerAction } from '@/app/actions/products/get-products-action'

import Card from '@/app/ui/dashboard/card/card'
import Chart from '@/app/ui/dashboard/chart/chart'
import RightBar from '@/app/ui/dashboard/rightbar/rightbar'
import Transactions from '@/app/ui/dashboard/transactions/transactions'

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  const usersData = await getUsersServerAction('', '')
  const todosData = await getTodosServerAction('', '')
  const productsData = await getProductsServerAction('', '')

  return (
    <div className="flex justify-between gap-4 mt-2 sm:mt-4 flex-col lg:flex-row">
      <div className="w-full lg:9/12 gap-2">
        <div className="flex justify-between gap-2">
          <Card itemName="Users" item={usersData} />
          <Card itemName="Products" item={productsData} />
          <Card itemName="Todos" item={todosData} />
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
