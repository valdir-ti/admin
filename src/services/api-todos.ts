import { api } from './api'

export type getTodosParams = {
  q: string
  page: string
  order: string
}

export async function getTodos({ q, page, order }: getTodosParams) {
  const response = await api.get(`/todos?q=${q}&page=${page}&order=${order}`)
  return response.data
}

export async function deleteTodo(id: string) {
  const data = await api.delete(`/todos/${id}`)
  return data
}

export async function updateTodo(id: string) {
  const data = await api.patch(`/todos/${id}`)
  return data
}

export async function createTodo(todo: unknown) {
  const data = await api.post('/todos', todo)
  return data
}
