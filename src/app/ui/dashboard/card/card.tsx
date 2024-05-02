import Link from 'next/link'
import CardIcon from './card-icon'
import { CardProps } from '@/types/card'
import TodoPercent from './todo-percent'
import { IoArrowRedoSharp } from 'react-icons/io5'

export default function Card({ data, index }: CardProps) {
  return (
    <>
      <div className="flex flex-col justify-around items-center mt-2 sm:justify-between sm:flex-row sm:mt-0 sm:p-2">
        <div className="flex items-center flex-col sm:flex-row">
          <CardIcon type={index?.toLowerCase()} />
          <h4 className="ml-0 sm:ml-2 font-medium mt-1 sm:mt-0">
            Total {index}
          </h4>
        </div>
        <div className="flex mt-2 mb-2 sm:mt-0 sm:mb-0 justify-center items-center w-full sm:w-2">
          <Link
            href={`/dashboard/${index.toLowerCase()}`}
            className="ml-4"
            title={`Ir para ${index}`}
          >
            <IoArrowRedoSharp />
          </Link>
        </div>
      </div>
      <div className="mt-2 sm:mt-4 ml-0 sm:ml-[32px] flex items-center sm:items-start justify-center sm:justify-start">
        <h3 className="text-2xl font-bold">{data?.count}</h3>
      </div>
      {index?.toLowerCase() === 'todos' &&
      data?.totalDone &&
      data?.totalOpen ? (
        <TodoPercent
          count={data.count}
          totalDone={data.totalDone}
          totalOpen={data.totalOpen}
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
