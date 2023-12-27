import { getUserServerAction } from '@/app/actions/users/get-user-action'

import Form from './form'

export default async function Page({
  params: { id }
}: {
  params: { id: string }
}) {
  const user = await getUserServerAction(id)

  return (
    <div className="flex gap-8">
      <Form user={user} />
    </div>
  )
}
