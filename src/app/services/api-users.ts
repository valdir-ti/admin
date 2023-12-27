import { User } from '../types'
import { api } from './api'

export async function getUser(id: string) {
  const { data } = await api.get(`/users/${id}`)
  return data
}

export async function getUsers() {
  const { data } = await api.get('/users')
  return data
}

export async function createUser(user: unknown) {
  const data = await api.post('/users', user)
  return data
}

export async function deleteUser(id: string) {
  const data = await api.delete(`/users/${id}`)
  return data
}

export async function updateUser(id: string, user: User) {
  const data = await api.patch(`/users/${id}`, user)
  return data
}
