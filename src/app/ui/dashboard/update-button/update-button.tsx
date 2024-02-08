'use client'

import { toast } from 'react-toastify'
import { updateTodoServerAction } from '@/app/actions/todos/update-todo-action'

type UpdateButtonProps = {
  id: string
  disabled: boolean
}
export default function UpdateButton({ id, disabled }: UpdateButtonProps) {
  const updateTodoClientAction = async (formData: FormData) => {
    const result = await updateTodoServerAction(formData)

    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo completed')
    }
  }

  return (
    <form action={updateTodoClientAction}>
      <input type="hidden" name="id" value={id} />
      <button
        className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[100px] disabled:bg-teal-900 disabled:cursor-default"
        disabled={disabled}
      >
        {disabled ? 'Completed' : 'Complete'}
      </button>
    </form>
  )
}
