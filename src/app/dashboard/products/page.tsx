import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import ProductsTableBody from "@/app/ui/dashboard/productsTableBody/productsTableBody";

export default async function Home() {

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'products', { cache: "no-cache" })
  const data = await response.json()

  return (
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button
            className="p-2 bg-[--purpleColor] rounded-md text-white border-0 cursor-pointer"
          >
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <ProductsTableBody data={data.data} />
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
