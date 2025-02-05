'use server'

import { revalidatePath } from 'next/cache'

import { getTodosCache } from '@/utils/getItemsCache'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { getTodosParams } from '@/services/api-todos'

export const getTodosServerAction = async ({
  q,
  page,
  order
}: getTodosParams) => {
  try {
    const data = await getTodosCache({ q, page, order })
    revalidatePath('/dashboard/todos')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
