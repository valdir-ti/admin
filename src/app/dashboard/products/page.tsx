import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image 
                  src="/noproduct.jpg" 
                  alt="John Doe" 
                  width={40} 
                  height={40}
                  className="rounded-full object-cover"
                />
                IPhone
              </div>
            </td>
            <td>Description for Iphone</td>
            <td>$999</td>
            <td>13.10.2023</td>
            <td>36</td>
            <td>
              <div className="gap-2 flex">
                <Link href="/dashboard/products/hashtesteproduto">
                  <button 
                    className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[80px]"
                  >
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button
                    className="p-1 text-[--text] border-0 cursor-pointer bg-red-600 rounded-md min-w-[80px]"
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination disabled={true}/>
    </div>
  )
}
