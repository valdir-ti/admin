import NextAuth from 'next-auth'
import { cookies } from 'next/headers'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

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

          const api_url =
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
              ? process.env.NEXT_PUBLIC_API_URL
              : process.env.NEXT_PUBLIC_API_PROD

          const res = await fetch(`${api_url}login`, {
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
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ]
})

export { handler as GET, handler as POST }
