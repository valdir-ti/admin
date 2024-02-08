import { toast } from 'react-toastify'
import { deleteTodoServerAction } from '@/app/actions/todos/delete-todo-action'
import { DeleteButton } from '../../ui/dashboard/delete-button/delete-button'

type DeleteButtonProps = {
  id: string
  disabled?: boolean
}

export default function DeleteForm({ id, disabled }: DeleteButtonProps) {
  const deleteTodoClientAction = async (formData: FormData) => {
    const result = await deleteTodoServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo deleted')
    }
  }

  return (
    <form action={deleteTodoClientAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton disabled={disabled} />
    </form>
  )
}
