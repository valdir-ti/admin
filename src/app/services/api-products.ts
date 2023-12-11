import axios from "axios"

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_PROD
})

export async function getProduct(id: string) {
    const { data } = await api.get(`/products/${id}`)
    return data
}

export async function getProducts() {
    const { data } = await api.get('/products')
    return data
}