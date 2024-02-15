'use client'

import { MouseEvent } from 'react'
import { MdLogout } from 'react-icons/md'
import { confirmAlert } from 'react-confirm-alert'

import { Types } from '@/app/enum/types'
import { TypesColors } from '@/app/enum/typeColors'
import DialogConfirm from '../dialog-confirm/dialog-confirm'
import { logoutUserServerAction } from '@/app/actions/users/logout-user-action'

type LogoutButtonProps = {
  color: TypesColors
}

export default function LogoutButton({ color }: LogoutButtonProps) {
  const colorsVariants = {
    primary:
      'text-[--textSoft] hover:bg-[--bgHover] ml-[18px] w-[88%] p-2 m-2 rounded-md',
    secondary: 'text-gray-800 hover:bg-gray-500 w-full p-2'
  }

  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DialogConfirm
            onClose={onClose}
            onConfirm={() => logoutUserServerAction()}
            message="Deseja realmente sair?"
            type={Types.red}
            callOnClose={false}
          />
        )
      }
    })
  }

  return (
    <button
      onClick={handleLogout}
      className={`flex items-center gap-2 cursor-pointer font-bold text-sm bg-transparent border-0 ${colorsVariants[color]}`}
    >
      <MdLogout />
      <div className="hidden md:block">Log Out</div>
    </button>
  )
}
