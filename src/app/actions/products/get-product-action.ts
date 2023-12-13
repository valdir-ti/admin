'use server'

import { revalidatePath } from 'next/cache'
import { getProduct } from '@/app/services/api-products'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const getProductServerAction = async (id: string) => {
  try {
    const data = await getProduct(id)
    revalidatePath('/dashboard/products')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
