'use server'

import { revalidatePath } from 'next/cache'

import { createTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const addTodoServerAction = async (formData: FormData) => {
  const description = formData.get('description')
  try {
    await createTodo({ description })
    revalidatePath('/dashboard/todos')
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
