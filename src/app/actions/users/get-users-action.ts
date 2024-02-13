'use server'

import { revalidatePath } from 'next/cache'
import { getUsersCache } from '@/app/utils/getItemsCache'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const getUsersServerAction = async () => {
  try {
    const data = await getUsersCache()
    revalidatePath('/dashboard/users')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
