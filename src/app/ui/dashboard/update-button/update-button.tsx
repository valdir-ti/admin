type UpdateButtonProps = {
  disabled?: boolean
  loading?: boolean
}
export default function UpdateButton({ disabled, loading }: UpdateButtonProps) {
  return (
    <button
      className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md disabled:bg-teal-900 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-around min-w-[130px]">
          {loading ? (
            <>
              <span className="ml-1 loading"></span>
              <span className="ml-1">Completing...</span>
            </>
          ) : disabled ? (
            <span className="">Completed</span>
          ) : (
            <span className="">Complete</span>
          )}
        </div>
      </div>
    </button>
  )
}
