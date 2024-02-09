type UpdateButtonProps = {
  disabled?: boolean
  loading?: boolean
}
export default function UpdateButton({ disabled, loading }: UpdateButtonProps) {
  return (
    <button
      className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[100px] disabled:bg-teal-900 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          {loading && <span className="loading mr-0 ml-1"></span>}
          {loading ? (
            <span className="min-w-[130px] ml-[-5px]">Completing...</span>
          ) : disabled ? (
            <span className="mr-2 ml-2 min-w-[130px]">Completed</span>
          ) : (
            <span className="mr-2 ml-2 min-w-[130px]">Complete</span>
          )}
        </div>
      </div>
    </button>
  )
}
