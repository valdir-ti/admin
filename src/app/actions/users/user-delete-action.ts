'use server'

import { deleteUser } from "@/app/services/api-users"
import { getErrorMessage } from "@/app/utils/getErrorMessage"
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