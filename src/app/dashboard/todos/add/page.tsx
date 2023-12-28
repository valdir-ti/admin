'use client'

import { toast } from 'react-toastify'

import { addTodoServerAction } from '@/app/actions/todos/add-todo-action'

export default function Page() {
  const addUserTodoAction = async (formData: FormData) => {
    const result = await addTodoServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    }
  }

  return (
    <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
      <form action={addUserTodoAction} className="flex flex-col">
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
            />
          </div>
        </div>
        <button className="w-full p-4 bg-teal-600 rounded-md color-[--text] border-0 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  )
}
