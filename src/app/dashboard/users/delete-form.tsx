import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

import { Types } from '@/enum/types'
import DialogConfirm from '@/app/ui/dashboard/dialog-confirm/dialog-confirm'
import { DeleteButton } from '../../ui/dashboard/delete-button/delete-button'
import { deleteUserServerAction } from '@/app/actions/users/delete-user-action'

type DeleteButtonProps = {
  id: string
  disabled?: boolean
}

export default function DeleteForm({ id, disabled }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false)
  const deleteUser = async () => {
    setLoading(true)
    const result = await deleteUserServerAction(id)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('User deleted')
    }
    setLoading(false)
  }

  const handleUserDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DialogConfirm
            onClose={onClose}
            onConfirm={deleteUser}
            message="Deseja realmente excluir esse item?"
            type={Types.green}
          />
        )
      }
    })
  }

  return (
    <form onSubmit={handleUserDelete}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton disabled={disabled} loading={loading} />
    </form>
  )
}
