import { addTodoServerAction } from '@/app/actions/todos/add-todo-action'
import SubmitButton from '@/app/ui/dashboard/submit-button/submit-button'

export default function Page() {
  const addTodoClientAction = async (formData: FormData) => {
    'use server'
    const formDataObject: Record<string, string> = {}
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString()
    })
    await addTodoServerAction(formDataObject)
  }

  return (
    <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
      <form action={addTodoClientAction} className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="description">Description</label>
            <input
              placeholder="description"
              name="description"
              id="description"
              required
              autoComplete="off"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 mt-2 rounded-md border-[1px] border-gray-600"
              autoFocus
            />
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
