import { api } from './api'

export async function getTodos() {
  const { data } = await api.get('/todos')
  return data
}

export async function deleteTodo(id: string) {
  const data = await api.delete(`/todos/${id}`)
  return data
}

export async function updateTodo(id: string) {
  const data = await api.patch(`/todos/${id}`)
  return data
}