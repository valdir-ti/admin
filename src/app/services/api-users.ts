import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_PROD

const api = axios.create({
    baseURL: baseURL
})

export async function getUser(id: string) {
    const { data } = await api.get(`/users/${id}`)
    return data
}