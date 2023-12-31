'use server'

import { getUser } from '@/app/services/api-users'
import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { revalidatePath } from 'next/cache'

export const getUserServerAction = async (id: string) => {
  try {
    const data = await getUser(id)
    revalidatePath('/dashboard/users')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
