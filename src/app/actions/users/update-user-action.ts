'use server'

import { revalidatePath } from 'next/cache'

import { updateUser } from '@/app/services/api-users'
import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { redirect } from 'next/navigation'

const getStringFormDataValue = (
  formData: FormData,
  field: string
): string | undefined => {
  const value = formData.get(field)

  if (typeof value === 'string' || value instanceof Blob) {
    return value as string
  }

  return undefined
}

export const updateUserServerAction = async (formData: FormData) => {
  const isAdminField = formData.get('isAdmin')
  const isActiveField = formData.get('isActive')

  const id: string | undefined = getStringFormDataValue(formData, 'id')
  const name: string | undefined = getStringFormDataValue(formData, 'name')
  const password: string | undefined = getStringFormDataValue(
    formData,
    'password'
  )
  const phone: string | undefined = getStringFormDataValue(formData, 'phone')
  const isAdmin: boolean = isAdminField === 'true'
  const isActive: boolean = isActiveField === 'true'
  const address: string | undefined = getStringFormDataValue(
    formData,
    'address'
  )

  try {
    await updateUser(String(id), {
      name,
      password,
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
