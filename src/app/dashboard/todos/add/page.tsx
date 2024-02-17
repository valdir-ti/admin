'use client'

import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { TTodoSchema, TodoSchema } from '@/schemas/todoSchema'
import SubmitButton from '@/app/ui/dashboard/submit-button/submit-button'
import { addTodoServerAction } from '@/app/actions/todos/add-todo-action'

export default function Page() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TTodoSchema>({
    resolver: zodResolver(TodoSchema)
  })

  const onSubmit = async (formData: TTodoSchema) => {
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="description">Description</label>
            <input
              {...register('description')}
              placeholder="description"
              id="description"
              required
              autoFocus
              autoComplete="off"
              className="w-full p-4 bg-[--bg] text-[--text] mb-2 mt-2 rounded-md border-[1px] border-gray-600"
            />
            {errors.description && (
              <p className="text-red-500 mb-2">{errors.description?.message}</p>
            )}
          </div>
        </div>
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  )
}
