'use server'

import { getErrorMessage } from "@/app/dashboard/users/add/add-user-action"
import { deleteUser } from "@/app/services/api-users"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

export const deleteUserAction = async (formData: FormData) => {
    const id = formData.get("id")
    try {
        await deleteUser(id as string)
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }
    revalidatePath("/dashboard/users")
    redirect('/dashboard/users')
}