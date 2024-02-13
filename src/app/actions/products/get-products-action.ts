'use server'

import { revalidatePath } from 'next/cache'

import { getErrorMessage } from '@/app/utils/getErrorMessage'
import { getProductsCache } from '@/app/utils/getItemsCache'

export const getProductsServerAction = async () => {
  try {
    const data = await getProductsCache()
    revalidatePath('/dashboard/products')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
