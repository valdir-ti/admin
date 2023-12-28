'use client'

import { toast } from 'react-toastify'
import { FormEvent, useState } from 'react'

import { addTodoServerAction } from '@/app/actions/todos/add-todo-action'

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const formDataObject: Record<string, string> = {}
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString()
    })

    setIsLoading(true)
    const result = await addTodoServerAction(formDataObject)
    setIsLoading(false)

    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo adicionado com sucesso!')
    }
  }

  return (
    <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col">
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
        <button className="w-full p-4 bg-teal-600 rounded-md color-[--text] border-0 cursor-pointer">
          <div className="w-full flex items-center justify-center">
            {isLoading && <span className="loading mr-2"></span>}
            {isLoading ? 'Submiting...' : 'Submit'}
          </div>
        </button>
      </form>
    </div>
  )
}
