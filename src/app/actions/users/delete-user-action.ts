'use server'

import { revalidatePath } from 'next/cache'

import { deleteUser } from '@/app/services/api-users'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const deleteUserServerAction = async (formData: FormData) => {
  const id = formData.get('id')
  try {
    await deleteUser(id as string)
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/users')
}
