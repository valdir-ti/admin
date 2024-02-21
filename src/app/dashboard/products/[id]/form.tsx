'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

import { Product } from '@/types'
import { convertStringToBoolean } from '@/utils/convertStringToBoolean'
import SubmitButton from '@/app/ui/dashboard/submit-button/submit-button'
import { updateProductServerAction } from '@/app/actions/products/update-product.action'

type FormProps = {
  product: Product
}

export default function Form({ product }: FormProps) {
  const [data, setData] = useState<Product | null>(product)
  const router = useRouter()

  const updateProductClientAction = async (formData: FormData) => {
    const result = await updateProductServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Product edited successfully')
      router.push('/dashboard/products')
    }
  }

  const handleFieldChange =
    (fieldName: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setData((prevUser) => ({
        ...prevUser,
        [fieldName]:
          e.target.type === 'checkbox'
            ? convertStringToBoolean(e.target.value)
            : e.target.value
      }))
    }

  useEffect(() => {
    setData(product)
  }, [product])

  const {
    title,
    description,
    price,
    stock,
    image,
    size,
    category,
    _id,
    isActive
  } = data || {}
  const productImage = image || '/noproduct.png'

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full">
      <div className="w-full sm:w-2/6 p-12 bg-[--bgSoft] rounded-md mt-6 h-max mr-2">
        <div className="w-[100%] h-[300px] font-bold flex items-center justify-center flex-col">
          <Image
            alt={title || 'Product title'}
            src={productImage}
            width="0"
            height="0"
            sizes="220vw"
            className="w-auto h-auto rounded-md"
          />
          <h4 className="mt-2 text-[--textSoft]">{title}</h4>
        </div>
      </div>
      <div className="w-full sm:w-4/6 p-12 bg-[--bgSoft] rounded-md mt-6">
        <form className="flex flex-col" action={updateProductClientAction}>
          <input type="hidden" name="_id" id="_id" value={_id} />
          <label htmlFor="name" className="text-xs">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={title}
            value={title}
            onChange={handleFieldChange('title')}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="price" className="text-xs">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder={String(price)}
            value={price}
            onChange={handleFieldChange('price')}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="stock" className="text-xs">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder={String(stock)}
            value={stock}
            onChange={handleFieldChange('stock')}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="size" className="text-xs">
            Size
          </label>
          <input
            type="number"
            name="size"
            id="size"
            value={size}
            placeholder={String(size)}
            onChange={handleFieldChange('size')}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="description" className="text-xs">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            defaultValue={description}
            onChange={handleFieldChange('description')}
            cols={30}
            rows={2}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="category" className="text-xs">
            Category
          </label>
          <select
            name="category"
            id="category"
            onChange={handleFieldChange('category')}
            value={String(category)}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          >
            <option value="kitchen">kitchen</option>
            <option value="phone">phone</option>
            <option value="computer">computer</option>
          </select>

          <label htmlFor="isActive" className="text-xs">
            IsActive
          </label>
          <select
            name="isActive"
            id="isActive"
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2 disabled:bg-[--bgSoft]"
            value={String(isActive)}
            onChange={handleFieldChange('isActive')}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <SubmitButton />
        </form>
      </div>
    </div>
  )
}
