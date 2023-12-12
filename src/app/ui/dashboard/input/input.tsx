import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  isMultiline?: boolean
}

export default function Input({
  name,
  label,
  defaultValue,
  isMultiline = false,
  ...rest
}: InputProps) {
  return (
    <div className={`flex flex-col ${isMultiline ? 'w-full' : 'w-[48%]'}`}>
      <label htmlFor={name} className="cursor-pointer mb-1">
        {label}
      </label>
      {isMultiline ? (
        <textarea
          name={name}
          id={name}
          cols={30}
          rows={3}
          defaultValue={defaultValue}
          className="w-full p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
        />
      ) : (
        <input
          id={name}
          {...rest}
          className="w-full p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
        />
      )}
    </div>
  )
}
