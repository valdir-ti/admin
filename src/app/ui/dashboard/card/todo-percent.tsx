type TodoPercentProps = {
  count: number
  totalOpen: number
  totalDone: number
}

export default function TodoPercent({
  count,
  totalDone,
  totalOpen
}: TodoPercentProps) {
  const completedTasks = (totalDone * 100) / count
  const openedTasks = (totalOpen * 100) / count

  return (
    <div className="ml-0 sm:ml-[32px] mt-2 sm:mt-4 flex flex-col text-sm items-center sm:items-start">
      <h5 className="">
        <span className="text-green-600 font-medium">
          {completedTasks.toFixed(1)}%
        </span>
        &nbsp; done
      </h5>
      <h5 className="">
        <span className="text-red-500 font-medium">
          {openedTasks.toFixed(1)}%
        </span>
        &nbsp; open
      </h5>
    </div>
  )
}
