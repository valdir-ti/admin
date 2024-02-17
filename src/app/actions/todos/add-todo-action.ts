'use server'

import { revalidatePath } from 'next/cache'

import { createTodo } from '@/services/api-todos'
import { TTodoSchema } from '@/schemas/todoSchema'
import { getErrorMessage } from '@/utils/getErrorMessage'

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
