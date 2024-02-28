'use server'

import { revalidatePath } from 'next/cache'

import { getUsersCache } from '@/utils/getItemsCache'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const getUsersServerAction = async (q: string, page: string) => {
  try {
    const data = await getUsersCache(q, page)
    revalidatePath('/dashboard/users')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
