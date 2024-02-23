import { cache } from 'react'

import { getTodos } from '@/services/api-todos'
import { getUsers } from '@/services/api-users'
import { getProducts } from '@/services/api-products'

export const getTodosCache = cache(async () => {
  const todos = await getTodos()
  return todos
})

export const getUsersCache = cache(async (q: string) => {
  const users = await getUsers(q)
  return users
})

export const getProductsCache = cache(async () => {
  const products = await getProducts()
  return products
})
