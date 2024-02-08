import { toast } from 'react-toastify'
import { DeleteButton } from '../../ui/dashboard/delete-button/delete-button'
import { deleteUserServerAction } from '@/app/actions/users/delete-user-action'

type DeleteButtonProps = {
  id: string
  disabled?: boolean
}

export default function DeleteForm({ id, disabled }: DeleteButtonProps) {
  const deleteUserClientAction = async (formData: FormData) => {
    const result = await deleteUserServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('User deleted')
    }
  }

  return (
    <form action={deleteUserClientAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton disabled={disabled} />
    </form>
  )
}
