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
      <table className="w-full">
        <thead>
          <tr className="text-lg text-slate-400">
            <td className="w-[30%]">Title</td>
            <td className="w-[30%]">Description</td>
            <td className="w-[10%]">Price</td>
            <td className="w-[10%]">Created At</td>
            <td className="w-[8%]">Stock</td>
            <td className="w-[12%]">Actions</td>
          </tr>
        </thead>
        <ProductsTableBody data={data} />
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
