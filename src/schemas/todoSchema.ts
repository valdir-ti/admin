import z from 'zod'

export const TodoSchema = z.object({
  title: z.string().min(2, 'Min length is 2'),
  description: z.string().min(2, 'Min length is 2')
})

export type TTodoSchema = z.infer<typeof TodoSchema>
