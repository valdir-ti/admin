import { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

import { Types } from '@/app/enum/types'
import DialogConfirm from '@/app/ui/dashboard/dialog-confirm/dialog-confirm'
import { DeleteButton } from '@/app/ui/dashboard/delete-button/delete-button'
import { deleteTodoServerAction } from '@/app/actions/todos/delete-todo-action'

type DeleteButtonProps = {
  id: string
  disabled?: boolean
}

export default function DeleteForm({ id, disabled }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false)

  const deleteTodo = async () => {
    setLoading(true)
    const result = await deleteTodoServerAction(id)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo deleted')
    }
    setLoading(false)
  }

  const handleTodoDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DialogConfirm
            onClose={onClose}
            onConfirm={deleteTodo}
            message="Deseja realmente excluir esse item?"
            type={Types.green}
          />
        )
      }
    })
  }

  return (
    <form onSubmit={handleTodoDelete}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton disabled={disabled} loading={loading} />
    </form>
  )
}
