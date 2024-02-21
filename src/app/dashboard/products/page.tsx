import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import ProductsTableBody from '@/app/dashboard/products/productsTableBody'
import { getProductsServerAction } from '@/app/actions/products/get-products-action'

export default async function Home() {
  const data = await getProductsServerAction()

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
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead>
            <tr className="text-lg text-slate-400">
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Creation
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <ProductsTableBody data={data} />
        </table>
      </div>
      <Pagination disabled={true} />
    </div>
  )
}
