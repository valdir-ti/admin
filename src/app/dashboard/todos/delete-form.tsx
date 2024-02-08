import { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'
import { DeleteButton } from '@/app/ui/dashboard/delete-button/delete-button'
import { deleteTodoServerAction } from '@/app/actions/todos/delete-todo-action'
import DialogDeleteItem from '@/app/ui/dashboard/dialog-delete-item/dialog-delete-item'

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
        return <DialogDeleteItem onClose={onClose} onConfirm={deleteTodo} />
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
