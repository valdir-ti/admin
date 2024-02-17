'use server'

import { revalidatePath } from 'next/cache'

import { deleteTodo } from '@/services/api-todos'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const deleteTodoServerAction = async (id: string) => {
  try {
    await deleteTodo(String(id))
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/todos')
}
