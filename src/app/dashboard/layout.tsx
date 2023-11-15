import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
        <div className="w-1/6 h-screen bg-[--bgSoft] p-4">
            <Sidebar/>
        </div>
        <div className="">
            <Navbar />
            {children}
        </div>
    </div>
  )
}
