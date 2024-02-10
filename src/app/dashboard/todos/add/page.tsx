'use client'

import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

import SubmitButton from '@/app/ui/dashboard/submit-button/submit-button'
import { addTodoServerAction } from '@/app/actions/todos/add-todo-action'

export default function Page() {
  const router = useRouter()

  const addTodoClientAction = async (formData: FormData) => {
    const result = await addTodoServerAction(formData)
    if (result?.error) {
      toast.error('Something went wrong!')
    } else {
      toast.success('Todo added successfully')
      router.push('/dashboard/todos')
    }
  }

  return (
    <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
      <form action={addTodoClientAction} className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="description">Description</label>
            <input
              placeholder="description"
              name="description"
              id="description"
              required
              autoComplete="off"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 mt-2 rounded-md border-[1px] border-gray-600"
              autoFocus
            />
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
