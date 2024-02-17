'use client'

import { Fragment, useEffect, useState } from 'react'

import Image from 'next/image'

import { User } from '@/types'
import DeleteForm from '@/app/dashboard/users/delete-form'
import { convertParseISODate } from '@/utils/convertParseISODate'
import ViewButton from '@/app/ui/dashboard/view-button/view-button'

type UsersTableProps = {
  data: Array<User>
}

export default function UsersTableBody({ data }: UsersTableProps) {
  const [users, setUsers] = useState<User[]>()

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
                    className="rounded-full object-cover max-h-[36px]"
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
                  <DeleteForm id={user._id!} />
                </div>
              </td>
            </tr>
          </Fragment>
        )
      })}
    </tbody>
  )
}
