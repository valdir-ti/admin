'use server'

import { getUsers } from '@/app/services/api-users'
import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { revalidatePath } from 'next/cache'

export const getUsersServerAction = async () => {
  try {
    const data = await getUsers()
    revalidatePath('/dashboard/users')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
