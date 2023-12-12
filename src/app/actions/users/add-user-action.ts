'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from "next/cache"

import { createUser } from "@/app/services/api-users"
import { getErrorMessage } from "@/app/utils/getErrorMessage"

export const addUser = async (formData: FormData) => {
    const { name, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData)
    try {
        await createUser({ name, email, password, phone, isAdmin, isActive, address })
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }
    revalidatePath("/dashboard/users")
    redirect('/dashboard/users')
}