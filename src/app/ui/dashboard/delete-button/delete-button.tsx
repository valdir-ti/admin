import { useFormStatus } from 'react-dom'

type DeleteButton = {
  disabled?: boolean
}

export function DeleteButton({ disabled }: DeleteButton) {
  const { pending } = useFormStatus()
  return (
    <button
      className="p-1 text-[--text] border-0 cursor-pointer bg-red-600 rounded-md min-w-[120px] disabled:bg-red-900 disabled:cursor-default"
      disabled={disabled || pending}
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          {pending && <span className="loading mr-2"></span>}
          {pending ? 'Deleting...' : 'Delete'}
        </div>
      </div>
    </button>
  )
}
