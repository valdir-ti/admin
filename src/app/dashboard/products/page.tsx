import Link from 'next/link'

import Table from '@/app/ui/dashboard/table/table'
import Search from '@/app/ui/dashboard/search/search'
import { getProductsServerAction } from '@/app/actions/products/get-products-action'

export default async function Home() {
  const data = await getProductsServerAction()

  const tableColumns = [
    'Title',
    'Description',
    'Price',
    'Creation',
    'Stock',
    'Actions'
  ]

  return (
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <Table columns={tableColumns} data={data} type="products" />
    </div>
  )
}
