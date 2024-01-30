'use client'

import { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import Image from 'next/image'

import { User } from '@/app/types'
import ViewButton from '@/app/ui/dashboard/view-button/view-button'
import { convertParseISODate } from '@/app/utils/convertParseISODate'
import DeleteButton from '@/app/ui/dashboard/delete-button/delete-button'
import { deleteUserServerAction } from '@/app/actions/users/delete-user-action'

type UsersTableProps = {
  data: Array<User>
}

export default function UsersTableBody({ data }: UsersTableProps) {
  const [users, setUsers] = useState<User[]>()

  const deleteUserClientAction = async (formData: FormData) => {
    const result = await deleteUserServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('User deleted')
    }
  }

  useEffect(() => {
    setUsers(data)
  }, [data])

  return (
    <tbody>
      {users?.map((user) => {
        const formattedDate = convertParseISODate(user.createdAt!)

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
                  <ViewButton id={user._id!} path="users" />
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
