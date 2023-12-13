'use server'

import { getProducts } from '@/app/services/api-products'
import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { revalidatePath } from 'next/cache'

export const getProductsServerAction = async () => {
  try {
    const data = await getProducts()
    revalidatePath('/dashboard/products')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
