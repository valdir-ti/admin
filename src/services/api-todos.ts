import { api } from './api'

export async function getTodos(q: string, page: string) {
  console.log('api => ', api.defaults.baseURL)
  const { data } = await api.get(`/todos?q=${q}&page=${page}`)
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

export async function createTodo(todo: unknown) {
  const data = await api.post('/todos', todo)
  return data
}
