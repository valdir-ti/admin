type DeleteButtonProps = {
  id: string
  action: (formData: FormData) => Promise<void>
}
export default function DeleteButton({ action, id }: DeleteButtonProps) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button className="p-1 text-[--text] border-0 cursor-pointer bg-red-600 rounded-md min-w-[80px]">
        Delete
      </button>
    </form>
  )
}
