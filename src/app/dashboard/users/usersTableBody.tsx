'use client'

import { Fragment } from 'react'
import { toast } from 'react-toastify'
import { format, parseISO } from 'date-fns'

import Link from 'next/link'
import Image from 'next/image'

import { User } from '@/app/types'
import DeleteButton from '@/app/ui/dashboard/delete-button/delete-button'
import { deleteUserServerAction } from '@/app/actions/users/delete-user-action'

type UsersTableProps = {
  data: Array<User>
}

export default function UsersTableBody({ data }: UsersTableProps) {
  const deleteUserClientAction = async (formData: FormData) => {
    const result = await deleteUserServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('User deleted')
    }
  }

  return (
    <tbody>
      {data?.map((user) => {
        const parsedDate = parseISO(user.createdAt!)
        const formattedDate = format(parsedDate, 'dd.MM.yyyy')

        const userImage = user.image || '/noavatar.png'

        return (
          <Fragment key={user._id}>
            <tr>
              <td>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={userImage}
                    alt={user.name || 'User name'}
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
                    <button className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[80px]">
                      View
                    </button>
                  </Link>
                  <DeleteButton
                    action={deleteUserClientAction}
                    id={user._id!}
                  />
                </div>
              </td>
            </tr>
          </Fragment>
        )
      })}
    </tbody>
  )
}
