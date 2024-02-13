'use server'

import { signIn } from '@/app/auth'
import { AuthError } from 'next-auth'

export async function loginUserServerAction(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      console.log('error => ', error)
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        case 'CallbackRouteError':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
