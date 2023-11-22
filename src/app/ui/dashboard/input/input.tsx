import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export default function Input({ type = "text", placeholder, name, required, autoComplete = "off", min = "1" }: InputProps) {
  return (
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
        autoComplete={autoComplete} 
        min={min}
    />
  )
}
