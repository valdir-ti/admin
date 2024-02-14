'use client'

import { MouseEvent } from 'react'
import { MdLogout } from 'react-icons/md'
import { confirmAlert } from 'react-confirm-alert'

import { Types } from '@/app/enum/types'
import DialogDeleteItem from '../dialog-confirm/dialog-confirm'
import { logoutUserServerAction } from '@/app/actions/users/logout-user-action'

export default function LogoutButton() {
  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DialogDeleteItem
            onClose={onClose}
            onConfirm={() => logoutUserServerAction()}
            message="Deseja realmente sair?"
            type={Types.red}
          />
        )
      }
    })
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center p-3 m-2 gap-2 cursor-pointer rounded-md text-[--textSoft] font-bold text-sm hover:bg-[--bgHover] bg-transparent border-0 w-[88%] ml-4"
    >
      <MdLogout />
      <div className="hidden md:block">Log Out</div>
    </button>
  )
}
