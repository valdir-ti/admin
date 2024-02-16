'use server'

import { revalidatePath } from 'next/cache'

import { createTodo } from '@/app/services/api-todos'
import { TTodoSchema } from '@/app/schemas/todoSchema'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const addTodoServerAction = async (formData: TTodoSchema) => {
  try {
    await createTodo(formData)
    revalidatePath('/dashboard/todos')
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
