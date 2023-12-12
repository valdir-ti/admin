'use client'

import Input from '@/app/ui/dashboard/input/input'
import SelectBox, {
  SelectBoxOptionsProps
} from '@/app/ui/dashboard/selectbox/selectbox'
import { ChangeEvent, useState } from 'react'

const categories = ['Kitchen', 'Computer', 'Phone']

export default function AddProduct() {
  const options: SelectBoxOptionsProps[] = [
    { label: 'Choose a category', value: '' },
    ...categories.map((category) => ({ label: category, value: category }))
  ]

  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
      <form className="flex flex-col">
        <div className="flex justify-between">
          <Input placeholder="title" name="title" required label="Title" />
          <SelectBox
            options={options}
            onChange={onChange}
            value={value}
            label="Category"
          />
        </div>
        <div className="flex justify-between">
          <Input
            placeholder="price"
            name="price"
            type="number"
            min="1"
            label="Price"
          />
          <Input
            placeholder="stock"
            name="stock"
            type="number"
            min="1"
            label="Stock"
          />
        </div>
        <div className="flex justify-between">
          <Input placeholder="color" name="color" label="Color" />
          <Input
            placeholder="size"
            name="size"
            type="number"
            min="1"
            label="Size"
          />
        </div>
        <Input
          isMultiline
          name="desc"
          id="desc"
          defaultValue="Description"
          label="Description"
        />
        <button className="w-full p-4 bg-teal-600 rounded-md color-[--text] border-0 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  )
}
