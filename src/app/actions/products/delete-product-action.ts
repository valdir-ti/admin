'use server'

import { deleteProduct } from "@/app/services/api-products"
import { getErrorMessage } from "@/app/utils/getErrorMessage"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

export const deleteProductAction = async (formData: FormData) => {
    const id = formData.get("id")
    try {
        await deleteProduct(id as string)
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }
    revalidatePath("/dashboard/products")
    redirect('/dashboard/products')
}