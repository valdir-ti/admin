import Input from "@/app/ui/dashboard/input/input";

export default function AddProduct() {
    return (
        <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
            <form
                className="flex flex-col"
            >
                <div className="flex justify-between">
                    <Input placeholder="title" name="title" required label="Title"/>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="category" className="cursor-pointer mb-1">Category</label>
                        <select
                            name="category"
                            id="category"
                            className="w-full p-6 bg-[--bg] text-[--text] mb-6 rounded-md border-[1px] border-gray-600"
                            >
                            <option value="general" className="text-[--text]">Choose a category</option>
                            <option value="kitchen" className="text-[--text]">Kitchen</option>
                            <option value="phone" className="text-[--text]">Phone</option>
                            <option value="computer" className="text-[--text]">Computer</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Input placeholder="price" name="price" type="number" min='1' label="Price" />
                    <Input placeholder="stock" name="stock" type="number" min='1' label="Stock" />
                </div>
                <div className="flex justify-between">
                    <Input placeholder="color" name="color" label="Color" />
                    <Input placeholder="size" name="size" type="number" min='1' label="Size" />
                </div>
                <textarea
                    name="desc"
                    id="desc"
                    cols={30}
                    rows={3}
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
