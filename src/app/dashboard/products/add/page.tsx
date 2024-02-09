'use client'

import SubmitButton from '@/app/ui/dashboard/submit-button/submit-button'
import { addProductServerAction } from '@/app/actions/products/add-product-action'

export default function AddProduct() {
  return (
    <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
      <form action={addProductServerAction} className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label htmlFor="title">Title</label>
            <input
              placeholder="Title"
              required
              autoFocus
              name="title"
              id="title"
              autoComplete="off"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
          <div className="flex flex-col w-[49%]">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className={`p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600 w-full`}
            >
              <option value="">Select an option</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Computer">Computer</option>
              <option value="Phone">Phone</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label htmlFor="price">Price</label>
            <input
              placeholder="price"
              type="number"
              min="1"
              name="price"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
          <div className="flex flex-col w-[49%]">
            <label htmlFor="stock">Stock</label>
            <input
              placeholder="stock"
              type="number"
              min="1"
              name="stock"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label htmlFor="color">Color</label>
            <input
              placeholder="color"
              name="color"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
          <div className="flex flex-col w-[49%]">
            <label htmlFor="size">Size</label>
            <input
              placeholder="size"
              type="number"
              min="1"
              name="size"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
        </div>
        <textarea
          id="description"
          defaultValue="Description"
          name="description"
          rows={5}
          className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
        ></textarea>
        <SubmitButton />
      </form>
    </div>
  )
}
