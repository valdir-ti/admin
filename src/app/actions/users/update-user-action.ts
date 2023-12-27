'use server'

import { revalidatePath } from 'next/cache'

import { updateUser } from '@/app/services/api-users'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

import { User } from '@/app/types'

export const updateUserServerAction = async (formData: User) => {
  const { _id: id, address, name, phone, isActive, isAdmin } = formData

  try {
    await updateUser(String(id), {
      name,
      phone,
      isAdmin,
      isActive,
      address
    })
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/users')
}
