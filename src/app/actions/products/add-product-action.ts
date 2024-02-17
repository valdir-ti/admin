'use server'

import { revalidatePath } from 'next/cache'

import { getErrorMessage } from '@/utils/getErrorMessage'
import { createProduct } from '@/app/services/api-products'

export const addProductServerAction = async (formData: FormData) => {
  const rawFormData = {
    title: formData.get('title'),
    category: formData.get('category'),
    price: formData.get('price'),
    stock: formData.get('stock'),
    color: formData.get('color'),
    size: formData.get('size'),
    description: formData.get('description')
  }

  try {
    await createProduct(rawFormData)
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/products')
}
