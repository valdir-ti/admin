type DeleteButton = {
  disabled?: boolean
  loading?: boolean
}

export function DeleteButton({ disabled, loading }: DeleteButton) {
  return (
    <button
      className="p-1 text-[--text] border-0 cursor-pointer bg-red-600 rounded-md min-w-[120px] disabled:bg-red-900 disabled:cursor-not-allowed"
      disabled={disabled || loading}
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          {loading && <span className="loading mr-2"></span>}
          {loading ? (
            <span className="mr-2 ml-2 min-w-[110px]">Deleting...</span>
          ) : (
            <span className="mr-2 ml-2 min-w-[110px]">Delete</span>
          )}
        </div>
      </div>
    </button>
  )
}
