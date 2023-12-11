import axios from "axios"

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_PROD
})

export async function getUser(id: string) {
    const { data } = await api.get(`/users/${id}`)
    return data
}