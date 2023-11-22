import Input from "@/app/ui/dashboard/input/input";

export default function AddUser() {
    return (
        <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
            <form
                className="flex flex-col"
            >
                <div className="flex justify-between">
                    <Input placeholder="name" name="name" required label="Name"/>
                    <Input placeholder="email" name="email" type="email" label="Email"/>
                </div>
                <div className="flex justify-between">
                    <Input placeholder="password" name="password" type="password" required label="Password"/>
                    <Input placeholder="phone" name="phone" required label="Phone"/>
                </div>
                <div className="flex justify-between">
                    <select
                        name="isAdmin"
                        id="isAdmin"
                        className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    >
                        <option value='false' selected className="text-[--text]">is Admin?</option>
                        <option value='true' className="text-[--text]">yes</option>
                        <option value='false' className="text-[--text]">no</option>
                    </select>
                    <select
                        name="isActive"
                        id="isActive"
                        className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    >
                        <option value='false' className="text-[--text]">is Active?</option>
                        <option value='true' className="text-[--text]">yes</option>
                        <option value='false' className="text-[--text]">no</option>
                    </select>
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
