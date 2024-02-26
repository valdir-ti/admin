import { api } from './api'

export async function getTodos(q: string, page: string, itemsPerPage: string) {
  let response
  if (q) {
    response = await api.get(
      `/todos?itemsPerPage=${itemsPerPage}?page=${page}?q=${q}`
    )
  } else {
    response = await api.get(`/todos?itemsPerPage=${itemsPerPage}?page=${page}`)
  }

  let todos, count

  if (response && response.data) {
    todos = response.data.todos
    count = response.data.count
  } else {
    todos = []
    count = 0
  }

  return { todos, count }
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
