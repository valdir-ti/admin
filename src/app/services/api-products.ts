import { Product } from '../types'
import { api } from './api'

export async function getProduct(id: string) {
  const { data } = await api.get(`/products/${id}`)
  return data
}

export async function getProducts() {
  const { data } = await api.get('/products')
  return data
}

export async function deleteProduct(id: string) {
  const { data } = await api.delete(`/products/${id}`)
  return data
}

export async function updateProduct(id: string, product: Product) {
  const data = await api.patch(`/products/${id}`, product)
  return data
}

export async function createProduct(product: unknown) {
  const data = api.post('/products', product)
  return data
}
