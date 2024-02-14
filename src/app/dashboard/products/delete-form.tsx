import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

import { Types } from '@/app/enum/types'
import DialogConfirm from '@/app/ui/dashboard/dialog-confirm/dialog-confirm'
import { DeleteButton } from '../../ui/dashboard/delete-button/delete-button'
import { deleteProductServerAction } from '@/app/actions/products/delete-product-action'

type DeleteButtonProps = {
  id: string
  disabled?: boolean
}

export default function DeleteForm({ id, disabled }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false)

  const deleteProduct = async () => {
    setLoading(true)
    const result = await deleteProductServerAction(id)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Product deleted')
    }
    setLoading(false)
  }

  const handleDeleteProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DialogConfirm
            onClose={onClose}
            onConfirm={deleteProduct}
            message="Deseja realmente excluir esse item?"
            type={Types.green}
          />
        )
      }
    })
  }

  return (
    <form onSubmit={handleDeleteProduct}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton disabled={disabled} loading={loading} />
    </form>
  )
}
