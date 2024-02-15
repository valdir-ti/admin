import Link from 'next/link'
import { MdSupervisedUserCircle } from 'react-icons/md'
import TodoPercent from './todo-percent'

type CardProps = {
  itemName: string
  items?: []
}

export default function Card({ itemName, items }: CardProps) {
  const total = items?.length

  return (
    <Link
      href={`/dashboard/${itemName.toLowerCase()}`}
      className="p-4 bg-[--bgSoft] hover:bg-[--bgHover] rounded-md min-w-[32%] cursor-pointer"
    >
      <div className="flex items-center">
        <MdSupervisedUserCircle />
        <h4 className="ml-3 font-medium">Total {itemName}</h4>
      </div>
      <div className="mt-4 ml-7">
        <h3 className="text-2xl font-bold">{total}</h3>
      </div>
      {itemName.toLowerCase() === 'todos' ? (
        <TodoPercent todos={items!} />
      ) : (
        <div className="ml-7 mt-4 flex items-center text-sm">
          <h5 className="">
            <span className="text-green-600 font-medium">12%</span> more than
            previous week
          </h5>
        </div>
      )}
    </Link>
  )
}
