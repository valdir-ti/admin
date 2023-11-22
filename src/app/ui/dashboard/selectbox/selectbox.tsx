import { ChangeEvent } from "react"

export type SelectBoxOptionsProps = {
    label: string
    value: string
}

type SelectBoxProps = {
    value?: string
    disabled?: boolean
    options: SelectBoxOptionsProps[]
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    width?: string
    label?: string
}

export default function SelectBox({ value, disabled, options, onChange, width = "48%", label }: SelectBoxProps) {
    return (
        <div className={`w-[${width}]`}>
            <label htmlFor="category" className="cursor-pointer">{label}</label>
            <select
                name={label?.toLocaleLowerCase()}
                id={label?.toLocaleLowerCase()}
                disabled={disabled}
                onChange={onChange}
                value={value}
                className={`p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600 mt-2 w-full`}
            >
                {
                    options.map(({ value, label }) => (
                        <option
                            key={value}
                            value={value}
                            className="text-[--text]"
                        >
                            {label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
