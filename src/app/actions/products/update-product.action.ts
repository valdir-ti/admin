'use server'

import { revalidatePath } from 'next/cache'

import { getErrorMessage } from '@/utils/getErrorMessage'
import { updateProduct } from '@/app/services/api-products'
import { getStringFormDataValue } from '@/utils/getStringFormDataValue'

export const updateProductServerAction = async (formData: FormData) => {
  const id = getStringFormDataValue(formData, '_id')
  const title = getStringFormDataValue(formData, 'title')
  const description = getStringFormDataValue(formData, 'description')
  const category = getStringFormDataValue(formData, 'category')

  const priceValue = formData.get('price')
  const stockValue = formData.get('stock')
  const sizeValue = formData.get('size')
  const isActiveValue = formData.get('isActive')

  const price: number | undefined =
    priceValue !== null ? parseInt(priceValue as string) : 0
  const stock: number | undefined =
    stockValue !== null ? parseInt(stockValue as string) : 0
  const size: number | undefined =
    sizeValue !== null ? parseInt(sizeValue as string) : 0
  const isActive: boolean =
    isActiveValue !== null ? isActiveValue === 'true' : false

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
}
