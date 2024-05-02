import { DataCardProps } from './card-drag-container'
import CardIcon from './card-icon'
import TodoPercent from './todo-percent'

export type CardProps = {
  itemName: string
  item: DataCardProps
}

export default function Card({ item, itemName }: CardProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center mt-2 sm:mt-0">
        <CardIcon type={itemName.toLowerCase()} />
        <h4 className="ml-0 sm:ml-3 font-medium mt-1 sm:mt-0">
          Total {itemName}
        </h4>
      </div>
      <div className="mt-2 sm:mt-4 ml-0 sm:ml-[32px] flex items-center sm:items-start justify-center sm:justify-start">
        <h3 className="text-2xl font-bold">{item?.count}</h3>
      </div>
      {itemName.toLowerCase() === 'todos' &&
      item?.totalDone &&
      item?.totalOpen ? (
        <TodoPercent
          count={item.count}
          totalDone={item.totalDone}
          totalOpen={item.totalOpen}
        />
      ) : (
        <div className="ml-0 sm:ml-[32px] mt-2 sm:mt-4 flex items-center text-sm justify-center sm:justify-start w-full">
          <h5 className="pl-4 sm:pl-0">
            <span className="text-green-600 font-medium">12%</span>
            &nbsp;
            <span>more than previous week</span>
          </h5>
        </div>
      )}
    </>
  )
}
