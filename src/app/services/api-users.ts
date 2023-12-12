import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
      ? process.env.NEXT_PUBLIC_API_URL
      : process.env.NEXT_PUBLIC_API_PROD
})

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
