'use server'

import { revalidatePath } from 'next/cache'

import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { getTodosCache } from '@/app/utils/getTodosCache'

export const getTodosServerAction = async () => {
  try {
    const data = await getTodosCache()
    revalidatePath('/dashboard/todos')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
