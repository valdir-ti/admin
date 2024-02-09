'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createProduct } from '@/app/services/api-products'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

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
  redirect('/dashboard/products')
}
