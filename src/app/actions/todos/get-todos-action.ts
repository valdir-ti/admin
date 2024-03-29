'use server'

import { revalidatePath } from 'next/cache'

import { getTodosCache } from '@/utils/getItemsCache'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const getTodosServerAction = async (q: string, page: string) => {
  try {
    const data = await getTodosCache(q, page)
    revalidatePath('/dashboard/todos')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
