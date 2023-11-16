import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className="p-4 bg-[--bgSoft] hover:bg-[--bgHover] rounded-md min-w-[32%] cursor-pointer">
        <div className="flex items-center">
            <MdSupervisedUserCircle />
            <h4 className="ml-4 font-medium">Total Users</h4>
        </div>
        <div className="mt-4 ml-8">
            <h3 className="text-2xl font-bold">10.928</h3>
        </div>
        <div className="ml-8 mt-4 flex items-center text-sm">
            <h5 className="">
                <span className="text-green-600 font-medium">12%</span> more than previous week
            </h5>
        </div>
    </div>
  )
}
