type DeleteButtonProps = {
  id: string
  action: (formData: FormData) => Promise<void>
  disabled?: boolean
}
export default function DeleteButton({
  action,
  id,
  disabled
}: DeleteButtonProps) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button
        className="p-1 text-[--text] border-0 cursor-pointer bg-red-600 rounded-md min-w-[80px] disabled:bg-red-900 disabled:cursor-default"
        disabled={disabled}
      >
        Delete
      </button>
    </form>
  )
}
