'use server'

import { revalidatePath } from 'next/cache'

import { createTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

import { Todo } from '@/app/types'

export const addTodoServerAction = async (formData: Todo) => {
  const { description } = formData
  try {
    await createTodo({ description })
    revalidatePath('/dashboard/todos')
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
