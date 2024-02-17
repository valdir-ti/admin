'use client'

import { FormEvent, useEffect, useState } from 'react'

import Image from 'next/image'
import { toast } from 'react-toastify'

import { User } from '@/types'
import { convertStringToBoolean } from '@/utils/convertStringToBoolean'
import { updateUserServerAction } from '@/app/actions/users/update-user-action'

type FormProps = {
  user: User
}

export default function Form({ user }: FormProps) {
  const [data, setData] = useState<User | null>(user)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)
    const formData = new FormData(e.currentTarget)

    const formDataObject: Record<string, string> = {}
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString()
    })

    const result = await updateUserServerAction(formDataObject)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Usuário atualizado com sucesso!')
    }
    setIsLoading(false)
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
    setData(user)
  }, [user])

  const {
    _id: id,
    name,
    email,
    phone,
    address,
    image,
    isActive,
    isAdmin
  } = data || {}
  const userImage = image || '/noavatar.png'

  return (
    <>
      <div className="w-2/6 p-12 bg-[--bgSoft] rounded-md mt-6 h-max">
        <div className="w-[100%] h-[300px] font-bold flex items-center justify-center flex-col">
          <Image
            alt={name || 'User image'}
            src={userImage}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[280px] h-auto"
          />
          <h4 className="mt-2 text-[--textSoft]">{name}</h4>
        </div>
      </div>
      <div className="w-4/6 p-12 bg-[--bgSoft] rounded-md mt-6">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_id"
            value={id}
            className="text-slate-800"
          />
          <label htmlFor="name" className="text-xs">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2 disabled:bg-[--bgSoft]"
            placeholder={name}
            value={name}
            onChange={handleFieldChange('name')}
            disabled={isLoading}
          />

          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            disabled
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2 disabled:bg-[--bgSoft]"
            placeholder={email}
          />

          <label htmlFor="phone" className="text-xs">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="off"
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2 disabled:bg-[--bgSoft]"
            placeholder={phone}
            value={phone}
            onChange={handleFieldChange('phone')}
            disabled={isLoading}
          />

          <label htmlFor="address" className="text-xs">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            cols={30}
            rows={2}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2 disabled:bg-[--bgSoft]"
            defaultValue={address}
            onChange={handleFieldChange('address')}
            disabled={isLoading}
          />
          <label htmlFor="isAdmin" className="text-xs">
            is Admin?
          </label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2 disabled:bg-[--bgSoft]"
            value={String(isAdmin)}
            onChange={handleFieldChange('isAdmin')}
            disabled={isLoading}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <label htmlFor="isActive" className="text-xs">
            is Active?
          </label>
          <select
            name="isActive"
            id="isActive"
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2 disabled:bg-[--bgSoft]"
            value={String(isActive)}
            onChange={handleFieldChange('isActive')}
            disabled={isLoading}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button
            className="w-full p-2 bg-teal-600 text-[--text] mt-4 rounded-md border-0 disabled:bg-teal-800"
            disabled={isLoading}
          >
            <div className="w-full flex items-center justify-center">
              {isLoading && <span className="loading mr-2"></span>}
              {isLoading ? 'Updating...' : 'Update'}
            </div>
          </button>
        </form>
      </div>
    </>
  )
}
