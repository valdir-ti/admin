'use client'

import Input from "@/app/ui/dashboard/input/input";
import SelectBox, { SelectBoxOptionsProps } from "@/app/ui/dashboard/selectbox/selectbox";
import { ChangeEvent, useState } from "react";

const isAdminOptions = ['isAdmin', 'yes', 'no']
const isActiveOptions = ['isActive', 'yes', 'no']

export default function AddUser() {

    const adminOptions: SelectBoxOptionsProps[] = [
        ...isAdminOptions.map((option) => ({ label: option, value: option }))
    ]

    const activeOptions: SelectBoxOptionsProps[] = [
        ...isActiveOptions.map((option) => ({ label: option, value: option }))
    ]

    const [isAdminValue, setIsAdminValue] = useState('')
    const [isActiveValue, setIsActiveValue] = useState('')

    const onChangeAdmin = (event: ChangeEvent<HTMLSelectElement>) => {
        setIsAdminValue(event.target.value)
    }

    const onChangeActive = (event: ChangeEvent<HTMLSelectElement>) => {
        setIsActiveValue(event.target.value)
    }

    return (
        <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
            <form
                className="flex flex-col"
            >
                <div className="flex justify-between">
                    <Input placeholder="name" name="name" required label="Name" />
                    <Input placeholder="email" name="email" type="email" label="Email" />
                </div>
                <div className="flex justify-between">
                    <Input placeholder="password" name="password" type="password" required label="Password" />
                    <Input placeholder="phone" name="phone" required label="Phone" />
                </div>
                <div className="flex justify-between">
                    <SelectBox 
                        options={adminOptions} 
                        onChange={onChangeAdmin} 
                        value={isAdminValue} 
                        label="isAdmin" 
                    />
                    <SelectBox 
                        options={activeOptions} 
                        onChange={onChangeActive} 
                        value={isActiveValue} 
                        label="isActive" 
                    />
                </div>
                <textarea
                    name="address"
                    id="address"
                    cols={30}
                    rows={3}
                    className="w-full p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                >
                    Address
                </textarea>

                <button
                    className="w-full p-4 bg-teal-600 rounded-md color-[--text] border-0 cursor-pointer"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}
