import { auth } from '@/app/auth'
import MobileSidebarClient from '@/app/ui/dashboard/mobile-sidebar/mobile-sidebar-client'

export default async function MobileSidebar() {
  const session = (await auth()) ?? null

  return <MobileSidebarClient session={session} />
}
