import { cache } from 'react'

import { getTodos } from '@/services/api-todos'
import { getUsers } from '@/services/api-users'
import { getProducts } from '@/services/api-products'

export const getTodosCache = cache(async (q: string, page: string) => {
  const todos = await getTodos(q, page)
  return todos
})

export const getUsersCache = cache(async (q: string) => {
  const users = await getUsers(q)
  return users
})

export const getProductsCache = cache(async (q: string, page: string) => {
  const products = await getProducts(q, page)
  return products
})
