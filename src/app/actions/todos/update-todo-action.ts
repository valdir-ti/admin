'use server'

import { updateTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const updateTodoServerAction = async (formData: FormData) => {
  const id = formData.get('id')
  try {
    await updateTodo(String(id))
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
