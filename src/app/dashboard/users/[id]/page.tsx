'use client'

import { getUserServerAction } from '@/app/actions/users/get-user-action'
import { updateUserServerAction } from '@/app/actions/users/update-user-action'
import { User } from '@/app/types'
import { convertStringToBoolean } from '@/app/utils/convertStringToBoolean'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function EditUser({
  params: { id }
}: {
  params: { id: string }
}) {
  const [user, setUser] = useState<User | null>(null)

  const updateUserClientAction = async (formData: FormData) => {
    const result = await updateUserServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Usuário atualizado com sucesso!')
    }
  }

  const handleFieldChange =
    (fieldName: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setUser((prevUser) => ({
        ...prevUser,
        [fieldName]:
          e.target.type === 'checkbox'
            ? convertStringToBoolean(e.target.value)
            : e.target.value
      }))
    }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const user = await getUserServerAction(id)
        setUser(user)
      }
      fetchData()
    } catch (error) {
      console.log('error on get user: ', id)
    }
  }, [id])

  const { name, email, phone, address, image, isActive, isAdmin } = user || {}
  const userImage = image || '/noavatar.png'

  return (
    <div className="flex gap-8">
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
        <form className="flex flex-col" action={updateUserClientAction}>
          <input type="hidden" name="id" value={id} />
          <label htmlFor="name" className="text-xs">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={name}
            value={name || ''}
            onChange={handleFieldChange('name')}
            autoComplete="off"
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            disabled
            placeholder={email || ''}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="phone" className="text-xs">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder={phone}
            autoComplete="off"
            value={phone || ''}
            onChange={handleFieldChange('phone')}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />

          <label htmlFor="address" className="text-xs">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            defaultValue={address}
            onChange={handleFieldChange('address')}
            cols={30}
            rows={2}
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
          />
          <label htmlFor="isAdmin" className="text-xs">
            is Admin?
          </label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
            value={String(isAdmin)}
            onChange={handleFieldChange('isAdmin')}
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
            className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2"
            value={String(isActive)}
            onChange={handleFieldChange('isActive')}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <button className="w-full p-2 bg-teal-600 text-[--text] mt-4 rounded-md border-0">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
