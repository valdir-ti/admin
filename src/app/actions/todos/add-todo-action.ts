'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

export const addTodoServerAction = async (formData: FormData) => {
  const description = formData.get('description')
  try {
    await createTodo({ description })
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
  revalidatePath('/dashboard/todos')
  redirect('/dashboard/todos')
}
