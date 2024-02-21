type DeleteButton = {
  disabled?: boolean
  loading?: boolean
}

export function DeleteButton({ disabled, loading }: DeleteButton) {
  return (
    <button
      className="p-1 text-[--text] border-0 cursor-pointer bg-red-600 rounded-md min-w-[92px] sm:min-w-[120px] disabled:bg-red-900 disabled:cursor-not-allowed"
      disabled={disabled || loading}
    >
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-around min-w-[92px] sm:min-w-[120px]">
          {loading ? (
            <>
              <span className="loading"></span>
              <span className="">Deleting...</span>
            </>
          ) : (
            <span className="mr-2 ml-2">Delete</span>
          )}
        </div>
      </div>
    </button>
  )
}
