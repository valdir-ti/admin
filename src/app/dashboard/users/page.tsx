'use client'

import { useEffect, useState } from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from 'date-fns'
import { User } from "@/app/types";

export default function Home() {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {

    const getData = async () => {
      const query = await fetch(process.env.NEXT_PUBLIC_API_URL + 'users')
      const response = await query.json()
      setUsers(response.data)
    }

    getData()
    
  }, [])

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
        <tbody>
          {users.map(user => {

            const parsedDate = parseISO(user.createdAt);
            const formattedDate = format(parsedDate, 'dd.MM.yyyy')

            return (
              <>
                <tr>
                  <td>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/noavatar.png"
                        alt="John Doe"
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                      {user.name}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{formattedDate}</td>
                  <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                  <td>{user.isActive ? 'Active' : 'Not Active'}</td>
                  <td>
                    <div className="gap-2 flex">
                      <Link href={`/dashboard/users/${user._id}`}>
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
              </>
            )
          })}
        </tbody>
      </table>
      <Pagination disabled={true} />
    </div>
  )
}
