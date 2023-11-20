export default function AddUser() {
    return (
        <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
            <form
                className="flex flex-wrap justify-between"
            >
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    required
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                />
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
                <textarea
                    name="address"
                    id="address"
                    cols={30}
                    rows={10}
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
