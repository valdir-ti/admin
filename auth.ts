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
          return user?.data?.user
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user?.name
        token.image = user?.image
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.image = token?.image as string
      }
      return session
    }
  }
})
