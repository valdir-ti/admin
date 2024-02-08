import { toast } from 'react-toastify'
import { DeleteButton } from '../../ui/dashboard/delete-button/delete-button'
import { deleteProductServerAction } from '@/app/actions/products/delete-product-action'

type DeleteButtonProps = {
  id: string
  disabled?: boolean
}

export default function DeleteForm({ id, disabled }: DeleteButtonProps) {
  const deleteProductClientAction = async (formData: FormData) => {
    const result = await deleteProductServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Product deleted')
    }
  }

  return (
    <form action={deleteProductClientAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton disabled={disabled} />
    </form>
  )
}
