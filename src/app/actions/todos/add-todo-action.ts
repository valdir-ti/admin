'use server'

import { revalidatePath } from 'next/cache'

import { createTodo } from '@/app/services/api-todos'
import { getErrorMessage } from '@/app/utils/getErrorMessage'

import { Todo } from '@/app/types'
import { redirect } from 'next/navigation'

export const addTodoServerAction = async (formData: Todo) => {
  const { description } = formData
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
