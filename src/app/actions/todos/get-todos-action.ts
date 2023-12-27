'use server'

import { getTodos } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { revalidatePath } from 'next/cache'

export const getTodosServerAction = async () => {
  try {
    const data = await getTodos()
    revalidatePath('/dashboard/todos')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
