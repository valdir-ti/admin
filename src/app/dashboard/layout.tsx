import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
        <div className="w-1/6 min-h-max bg-[--bgSoft] p-4">
            <Sidebar/>
        </div>
        <div className="w-5/6 p-4">
            <Navbar />
            {children}
        </div>
    </div>
  )
}
