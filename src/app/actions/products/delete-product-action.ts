'use server'

import { deleteProduct } from '@/app/services/api-products'
import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { revalidatePath } from 'next/cache'

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
