import Footer from '../ui/dashboard/footer/footer'
import Navbar from '../ui/dashboard/navbar/navbar'
import Sidebar from '../ui/dashboard/sidebar/sidebar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="w-full sm:w-1/4 lg:w-2/12 min-h-screen bg-[--bgSoft] hidden sm:flex p-2 sm:p-4">
        <Sidebar />
      </div>
      <div className="w-full sm:w-3/4 lg:w-10/12 p-2 sm:p-4">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
