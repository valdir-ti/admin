type PaginationProps = {
  disabled: boolean
}

export default function Pagination({ disabled }: PaginationProps) {
  return (
    <div className="flex justify-between mt-6">
      <button
        className={`p-1 rounded-sm min-w-[100px] ${
          disabled
            ? 'bg-gray-500 text-gray-950'
            : 'bg-white text-black cursor-pointer'
        }`}
      >
        Previous
      </button>
      <button className="p-1 cursor-pointer rounded-sm min-w-[100px] bg-white text-black">
        Next
      </button>
    </div>
  )
}
