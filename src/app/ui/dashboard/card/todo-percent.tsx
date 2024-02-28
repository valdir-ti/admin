type TodoProps = {
  _id: string
  description: string
  done: boolean
  createdAt: string
}

type TodoPercentProps = {
  todos: TodoProps[]
  count: number
}

export default function TodoPercent({ todos, count }: TodoPercentProps) {
  const completedTasks =
    count > 0
      ? todos?.reduce((count, todo) => count + (todo?.done ? 1 : 0), 0)
      : 0
  const percentCompleted = count > 0 ? (completedTasks / count) * 100 : 0
  const percentNotCompleted = 100 - percentCompleted

  return (
    <div className="ml-0 sm:ml-[32px] mt-2 sm:mt-4 flex flex-col text-sm items-center sm:items-start">
      <h5 className="">
        <span className="text-green-600 font-medium">
          {percentCompleted.toFixed(1)}%
        </span>{' '}
        done
      </h5>
      <h5 className="">
        <span className="text-red-500 font-medium">
          {percentNotCompleted.toFixed(1)}%
        </span>{' '}
        open
      </h5>
    </div>
  )
}
