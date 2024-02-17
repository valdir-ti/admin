'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { User } from '@/types'
import { updateUser } from '@/app/services/api-users'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

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
  redirect('/dashboard/users')
}
