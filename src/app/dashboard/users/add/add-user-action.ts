'use server'

import { createUser } from "@/app/services/api-users"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

export const getErrorMessage = (error: unknown): string => {
    let message: string

    if(error instanceof Error){
        message= error.message
    } else if(error && typeof error === "object" && "messsage" in error) {
        message = String(error.messsage)
    } else if (typeof error === "string") {
        message = error
    } else {
        message = "Something went wrong!"
    }

    return message
}

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