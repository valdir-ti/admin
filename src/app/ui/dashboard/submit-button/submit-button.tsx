'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full p-4 bg-teal-600 rounded-md color-[--text] border-0 cursor-pointer disabled:bg-teal-800"
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          {pending && <span className="loading mr-2"></span>}
          {pending ? 'Submiting...' : 'Submit'}
        </div>
      </div>
    </button>
  )
}
