'use server'

import { revalidatePath } from 'next/cache'

import { createUser } from '@/app/services/api-users'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const addUserServerAction = async (formData: FormData) => {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone: formData.get('phone'),
    isAdmin: formData.get('isAdmin'),
    isActive: formData.get('isActive'),
    address: formData.get('address')
  }

  try {
    await createUser(rawFormData)
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/users')
}
