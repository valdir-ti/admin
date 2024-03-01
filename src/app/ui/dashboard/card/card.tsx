import Link from 'next/link'
import CardIcon from './card-icon'
import TodoPercent from './todo-percent'

type DataProps = {
  data: []
  count: number
  totalOpen: number
  totalDone: number
}

type CardProps = {
  itemName: string
  item: DataProps
}

export default function Card({ itemName, item }: CardProps) {
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
      <div className="mt-2 sm:mt-4 ml-0 sm:ml-[32px] flex items-center sm:items-start justify-center sm:justify-start">
        <h3 className="text-2xl font-bold">{item?.count}</h3>
      </div>
      {itemName.toLowerCase() === 'todos' ? (
        <TodoPercent
          count={item?.count}
          totalDone={item?.totalDone}
          totalOpen={item?.totalOpen}
        />
      ) : (
        <div className="ml-0 sm:ml-[32px] mt-2 sm:mt-4 flex items-center text-sm justify-center sm:justify-start w-full">
          <h5 className="pl-4 sm:pl-0">
            <span className="text-green-600 font-medium">12%</span>&nbsp;
            <span>more than previous week</span>
          </h5>
        </div>
      )}
    </Link>
  )
}
