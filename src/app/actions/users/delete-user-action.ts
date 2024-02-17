'use server'

import { revalidatePath } from 'next/cache'

import { deleteUser } from '@/app/services/api-users'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const deleteUserServerAction = async (id: string) => {
  try {
    await deleteUser(id as string)
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/users')
}
