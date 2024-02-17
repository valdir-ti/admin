import { cache } from 'react'

import { getTodos } from '@/services/api-todos'
import { getUsers } from '@/services/api-users'
import { getProducts } from '@/services/api-products'

export const getTodosCache = cache(async () => {
  const todos = await getTodos()
  return todos
})

export const getUsersCache = cache(async () => {
  const todos = await getUsers()
  return todos
})

export const getProductsCache = cache(async () => {
  const todos = await getProducts()
  return todos
})
