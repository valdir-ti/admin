'use server'

import { revalidatePath } from 'next/cache'

import { getErrorMessage } from '@/utils/getErrorMessage'
import { deleteProduct } from '@/app/services/api-products'

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
