'use server'

import { signOut } from '@/app/auth'

export async function logoutUserServerAction() {
  try {
    await signOut()
  } catch (error) {
    console.log('error logging out => ', error)
    throw error
  }
}
