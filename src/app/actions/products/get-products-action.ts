'use server'

import { revalidatePath } from 'next/cache'

import { getProductsCache } from '@/utils/getItemsCache'
import { getErrorMessage } from '@/utils/getErrorMessage'

export const getProductsServerAction = async (q: string) => {
  try {
    const data = await getProductsCache(q)
    revalidatePath('/dashboard/products')
    return data
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
