'use server'

import { revalidatePath } from "next/cache"

import { createUser } from "@/app/services/api-users"
import { getErrorMessage } from "@/app/utils/getErrorMessage"
import { redirect } from "next/navigation"

export const addUserServerAction = async (formData: FormData) => {
    const { name, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData)
    try {
        await createUser({ name, email, password, phone, isAdmin, isActive, address })
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}