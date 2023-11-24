import Image from "next/image";

export default async function EditUser({
    params: { id },
}: {
    params: { id: string }
}) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/${id}`, { cache: 'no-cache' })
    const user = await response.json()

    const { data: { name, email, password, phone, address, image, isActive, isAdmin } } = user
    const userImage = image || "/noavatar.png"

    return (
        <div className="flex gap-8">
            <div className="w-2/6 p-12 bg-[--bgSoft] rounded-md mt-6 h-max">
                <div className="w-[100%] h-[300px] font-bold flex items-center justify-center flex-col">
                    <Image
                        alt={name}
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
                <form className="flex flex-col">
                    <label htmlFor="username" className="text-xs">Username</label>
                    <input type="text" name="username" id="username" placeholder={name} value={name} className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="email" className="text-xs">Email</label>
                    <input type="email" id="email" name="email" placeholder={email} value={email} className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="password" className="text-xs">Password</label>
                    <input type="password" name="password" id="password" value={password} className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="phone" className="text-xs">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder={phone} value={phone} className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="address" className="text-xs">Address</label>
                    <textarea name="address" id="address" defaultValue={address} cols={30} rows={2} className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />
                    <label htmlFor="isAdmin" className="text-xs">is Admin?</label>
                    <select name="isAdmin" id="isAdmin" className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2">
                        <option value='true' selected={isAdmin}>Yes</option>
                        <option value='false' selected={!isAdmin}>No</option>
                    </select>

                    <label htmlFor="isActive" className="text-xs">is Active?</label>
                    <select name="isActive" id="isActive" className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2">
                        <option value='true' selected={isActive}>Yes</option>
                        <option value='false' selected={!isActive}>No</option>
                    </select>

                    <button className="w-full p-2 bg-teal-600 text-[--text] mt-4 rounded-md border-0">Submit</button>
                </form>
            </div>
        </div>
    )
}
