import { cache } from 'react'
import { getTodos } from '@/app/services/api-todos'

export const getTodosCache = cache(async () => {
  const todos = await getTodos()
  return todos
})
