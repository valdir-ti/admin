'use server'

import z from 'zod'
import { revalidatePath } from 'next/cache'

import { createTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

const schema = z.object({
  description: z.string().min(2)
})

export const addTodoServerAction = async (formData: FormData) => {
  const parsedObject = schema.parse({
    description: formData.get('description')
  })

  try {
    await createTodo(parsedObject)
    revalidatePath('/dashboard/todos')
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
