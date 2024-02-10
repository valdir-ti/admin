'use client'

import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'

import SubmitButton from '@/app/ui/dashboard/submit-button/submit-button'
import { addUserServerAction } from '../../../actions/users/add-user-action'

export default function Page() {
  const router = useRouter()

  const addUserClientAction = async (formData: FormData) => {
    const result = await addUserServerAction(formData)
    if (result?.error) {
      toast.error('Something went wrong!')
    } else {
      toast.success('User added successfully')
      router.push('/dashboard/users')
    }
  }

  return (
    <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
      <form action={addUserClientAction} className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label htmlFor="name">Name</label>
            <input
              placeholder="name"
              name="name"
              id="name"
              required
              autoComplete="off"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
              autoFocus
            />
          </div>
          <div className="flex flex-col w-[49%]">
            <label htmlFor="email">Email</label>
            <input
              placeholder="email"
              name="email"
              id="email"
              type="email"
              autoComplete="off"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label htmlFor="password">Password</label>
            <input
              placeholder="password"
              name="password"
              id="password"
              type="password"
              required
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
          <div className="flex flex-col w-[49%]">
            <label htmlFor="phone">Phone</label>
            <input
              placeholder="phone"
              name="phone"
              id="phone"
              autoComplete="off"
              className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label htmlFor="isAdmin">IsAdmin?</label>
            <select
              name="isAdmin"
              id="isAdmin"
              className={`p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600 mt-2 w-full`}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="flex flex-col w-[49%]">
            <label htmlFor="isActive">IsActive</label>
            <select
              name="isActive"
              id="isActive"
              className={`p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600 mt-2 w-full`}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            defaultValue="Address"
            className="w-full p-4 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
