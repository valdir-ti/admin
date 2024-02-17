'use client'

import { useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  isSubmitting?: boolean
}

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  const isDisabled = pending || isSubmitting

  return (
    <button
      disabled={isDisabled}
      type="submit"
      className="w-full p-4 bg-teal-600 rounded-md color-[--text] border-0 cursor-pointer disabled:bg-teal-800 disabled:cursor-not-allowed"
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          {isDisabled && <span className="loading mr-2"></span>}
          {isDisabled ? 'Submiting...' : 'Submit'}
        </div>
      </div>
    </button>
  )
}
