'use server'

import { revalidatePath } from 'next/cache'

import { getUser } from '@/services/api-users'
import { getErrorMessage } from '@/utils/getErrorMessage'

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
