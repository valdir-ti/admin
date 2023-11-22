import Image from "next/image";

export default function EditProduct() {
    return (
        <div className="flex gap-8">
            <div className="w-2/6 p-12 bg-[--bgSoft] rounded-md mt-6 h-max">
                <div className="w-[100%] h-[300px] font-bold flex items-center justify-center flex-col">
                    <Image
                        alt="Product"
                        src="/noproduct.jpg"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                    <h4 className="mt-2 text-[--textSoft] w-full">Iphone</h4>
                </div>
            </div>
            <div className="w-4/6 p-12 bg-[--bgSoft] rounded-md mt-6">
                <form className="flex flex-col">

                    <label htmlFor="name" className="text-xs">Name</label>
                    <input type="text" name="name" id='name' placeholder="Name" className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="price" className="text-xs">Price</label>
                    <input type="number" id='price' name="price" placeholder="price" className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="stock" className="text-xs">Stock</label>
                    <input type="number" id='stock' name="stock" placeholder="32" className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="size" className="text-xs">Size</label>
                    <input type="number" name="size" id="size" placeholder="12" className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="description" className="text-xs">Description</label>
                    <textarea name="description" id="description" defaultValue="Description" cols={30} rows={2} className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2" />

                    <label htmlFor="category" className="text-xs">Category</label>
                    <select name="category" id="category" className="p-2 border-[2px] border-gray-500 rounded-md bg-[--bg] text-[--text] mb-2">
                        <option value='kitchen'>kitchen</option>
                        <option value='phone'>phone</option>
                        <option value='computer'>computer</option>
                    </select>

                    <button className="w-full p-2 bg-teal-600 text-[--text] mt-4 rounded-md border-0">Submit</button>

                </form>
            </div>
        </div>
    )
}
