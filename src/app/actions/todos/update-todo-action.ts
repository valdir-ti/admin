'use server'

import { revalidatePath } from 'next/cache'

import { updateTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const updateTodoServerAction = async (id: string) => {
  try {
    await updateTodo(String(id))
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/todos')
}
