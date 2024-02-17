'use server'

import { revalidatePath } from 'next/cache'

import { deleteProduct } from '@/services/api-products'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const deleteProductServerAction = async (id: string) => {
  try {
    await deleteProduct(id)
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/products')
}
