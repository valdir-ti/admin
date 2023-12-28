type UpdateButtonProps = {
  id: string
  action: (formData: FormData) => Promise<void>
  disabled: boolean
}
export default function UpdateButton({
  action,
  id,
  disabled
}: UpdateButtonProps) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button
        className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[120px] disabled:bg-teal-900 disabled:cursor-default"
        disabled={disabled}
      >
        {disabled ? 'Completed' : 'Complete'}
      </button>
    </form>
  )
}
