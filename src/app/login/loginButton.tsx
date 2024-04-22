type LoginButtonProps = {
  loading: boolean
}

export default function LoginButton({ loading }: LoginButtonProps) {
  return (
    <button
      className="w-[80%] h-12 rounded-sm bg-teal-600 cursor-pointer pl-2 border-0 mt-2 disabled:bg-teal-800 disabled:cursor-not-allowed"
      aria-disabled={loading}
      disabled={loading}
    >
      <div className="w-full flex items-center justify-center">
        {loading && <span className="loading mr-2"></span>}
        Log in
      </div>
    </button>
  )
}
