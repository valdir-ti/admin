import { getServerSession } from 'next-auth'
import MobileSidebarClient from '@/app/ui/dashboard/mobile-sidebar/mobile-sidebar-client'

export default async function MobileSidebar() {
  const session = await getServerSession()

  return <MobileSidebarClient session={session} />
}
