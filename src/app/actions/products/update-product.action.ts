'use server'

import { updateProduct } from '@/app/services/api-products'
import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { getStringFormDataValue } from '@/app/utils/getStringFormDataValue'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const updateProductServerAction = async (formData: FormData) => {
  const id = getStringFormDataValue(formData, '_id')
  const title = getStringFormDataValue(formData, 'title')
  const description = getStringFormDataValue(formData, 'description')
  const price = getStringFormDataValue(formData, 'price')
  const stock = getStringFormDataValue(formData, 'stock')
  const size = getStringFormDataValue(formData, 'size')
  const category = getStringFormDataValue(formData, 'category')
  const isActive = getStringFormDataValue(formData, 'isActive')

  try {
    await updateProduct(String(id), {
      title,
      description,
      price,
      stock,
      size,
      category,
      isActive
    })
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}
