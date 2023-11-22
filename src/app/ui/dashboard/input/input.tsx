import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string
  name: string
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <div className="flex flex-col w-[48%]">
      <label 
        htmlFor={name}
        className="cursor-pointer mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        {...rest}
        className="w-full p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
      />
    </div>
  )
}
