'use server'

import { deleteTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const deleteTodoServerAction = async (formData: FormData) => {
  const id = formData.get('id')
  try {
    await deleteTodo(String(id))
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
