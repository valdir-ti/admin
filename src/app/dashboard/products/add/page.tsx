import Input from "@/app/ui/dashboard/input/input";

export default function AddProduct() {
    return (
        <div className="bg-[--bgSoft] p-4 rounded-md mt-4">
            <form
                className="flex flex-wrap justify-between"
            >
                <Input placeholder="title" name="title" />
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
                <Input placeholder="price" name="price" type="number"/>
                <Input placeholder="stock" name="stock" type="number"/>
                <Input placeholder="color" name="color"/>
                <Input placeholder="size" name="size" type="number"/>
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
