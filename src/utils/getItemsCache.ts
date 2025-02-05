import { cache } from 'react'

import { getTodos, getTodosParams } from '@/services/api-todos'
import { getUsers } from '@/services/api-users'
import { getProducts } from '@/services/api-products'

export const getTodosCache = cache(
  async ({ q, page, order }: getTodosParams) => {
    const todos = await getTodos({ q, page, order })
    return todos
  }
)

export const getUsersCache = cache(async (q: string, page: string) => {
  const users = await getUsers(q, page)
  return users
})

export const getProductsCache = cache(async (q: string, page: string) => {
  const products = await getProducts(q, page)
  return products
})
