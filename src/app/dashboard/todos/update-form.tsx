import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { updateTodoServerAction } from '@/app/actions/todos/update-todo-action'
import UpdateButton from '@/app/ui/dashboard/update-button/update-button'

type UpdateFormProps = {
  id: string
  disabled?: boolean
}

export default function UpdateForm({ id, disabled }: UpdateFormProps) {
  const [loading, setLoading] = useState(false)

  const handleUpdateTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    const result = await updateTodoServerAction(id)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo completed')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleUpdateTodo}>
      <input type="hidden" name="id" value={id} />
      <UpdateButton disabled={disabled} loading={loading} />
    </form>
  )
}
