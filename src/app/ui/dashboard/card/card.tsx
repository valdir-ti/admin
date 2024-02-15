import Link from 'next/link'
import TodoPercent from './todo-percent'
import CardIcon from './card-icon'

type CardProps = {
  itemName: string
  items?: []
}

export default function Card({ itemName, items }: CardProps) {
  const total = items?.length

  return (
    <Link
      href={`/dashboard/${itemName.toLowerCase()}`}
      className="p-[4px] sm:p-4 bg-[--bgSoft] hover:bg-[--bgHover] rounded-md min-w-[32%] cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row items-center mt-2 sm:mt-0">
        <CardIcon type={itemName.toLowerCase()} />
        <h4 className="ml-0 sm:ml-3 font-medium mt-1 sm:mt-0">
          Total {itemName}
        </h4>
      </div>
      <div className="mt-2 sm:mt-4 ml-0 sm:ml-6 flex items-center sm:items-start justify-center sm:justify-start">
        <h3 className="text-2xl font-bold">{total}</h3>
      </div>
      {itemName.toLowerCase() === 'todos' ? (
        <TodoPercent todos={items!} />
      ) : (
        <div className="ml-0 sm:ml-6 mt-2 sm:mt-4 flex items-center text-sm justify-center w-full">
          <h5 className="pl-4 sm:pl-0">
            <span className="text-green-600 font-medium">12%</span>{' '}
            <span>more than previous week</span>
          </h5>
        </div>
      )}
    </Link>
  )
}
