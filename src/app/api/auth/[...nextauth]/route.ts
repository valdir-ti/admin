import NextAuth from 'next-auth'
import { cookies } from 'next/headers'
import CredentialsProvider from 'next-auth/providers/credentials'

const api_url =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_PROD

const handler = NextAuth({
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password'
        }
      },
      async authorize(credentials) {
        if (!credentials) return null

        try {
          const data = {
            email: credentials.email,
            password: credentials.password
          }

          const res = await fetch(api_url!, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
          })

          const response = await res.json()

          const { user, token } = response

          const combinedObject = { ...user, token }

          if (res.status === 201 && combinedObject) {
            cookies().set('jwt', token)
            return combinedObject
          }
          return null
        } catch (error) {
          return null
        }
      }
    })
  ]
})

export { handler as GET, handler as POST }
