export default function Home() {
  return (
    <div className="grid place-content-center h-screen w-full">
      <form className="flex flex-col items-center justify-center bg-[--bgSoft] rounded-md w-96 h-96 gap-8">
        <h3 className="font-bold text-3xl">Login</h3>
        <input
          type="email"
          placeholder="Email"
          className="w-[80%] h-12 rounded-sm bg-[--bg] pl-2 border-0"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[80%] h-12 rounded-sm bg-[--bg] pl-2 border-0"
        />
        <button className="w-[80%] h-12 rounded-sm bg-teal-600 pl-2 border-0 mt-2">
          Submit
        </button>
        <span>Error credentials</span>
      </form>
    </div>
  )
}
