'use server'

import { deleteUser } from "@/app/services/api-users"
import { getErrorMessage } from "@/app/utils/getErrorMessage"
import { revalidatePath } from "next/cache"

export const deleteUserServerAction = async (formData: FormData) => {
    const id = formData.get("id")
    try {
        await deleteUser(id as string)
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }
    revalidatePath("/dashboard/users")
}