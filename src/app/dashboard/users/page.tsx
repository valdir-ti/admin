import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import UsersTableBody from "@/app/ui/dashboard/usersTableBody/usersTableBody";

export default async function Home() {

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'users', { cache: "no-cache" })
  const data = await response.json()

  return (
    <div className="mt-4 bg-[--bgSoft] p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
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
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <UsersTableBody data={data.data} />
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
