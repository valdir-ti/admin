import { api } from './api'

type apiLogin = {
  email: string
  password: string
}

export async function apiLogin(user: apiLogin) {
  const data = await api.post('/login', user)
  return data
}
