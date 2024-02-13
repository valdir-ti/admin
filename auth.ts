import { z } from 'zod'
import NextAuth from 'next-auth'

import { authConfig } from './auth.config'
import { apiLogin } from '@/app/services/api-login'
import Credentials from 'next-auth/providers/credentials'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await apiLogin({ email, password })
          if (!user) return null
          return user?.data
        }

        return null
      }
    })
  ]
})
