export default function AddProduct() {
    return (
        <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
            <form
                className="flex flex-wrap justify-between"
            >
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    required
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                />
                <select
                    name="category"
                    id="category"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                >
                    <option value="general" className="text-[--text]">Choose a category</option>
                    <option value="kitchen" className="text-[--text]">kitchen</option>
                    <option value="phone" className="text-[--text]">phone</option>
                    <option value="computer" className="text-[--text]">computer</option>
                </select>
                <input
                    type="number"
                    name="price"
                    placeholder="price"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                />
                <input
                    type="number"
                    name="stock"
                    placeholder="stock"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="color"
                    placeholder="color"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                />
                <input
                    type="number"
                    name="size"
                    placeholder="size"
                    className="w-[48%] p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                    autoComplete="off"
                />
                <textarea
                    name="desc"
                    id="desc"
                    cols={30}
                    rows={10}
                    className="w-full p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                >
                    Description
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
