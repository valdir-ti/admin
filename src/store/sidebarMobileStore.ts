import { create } from 'zustand'

type sidebarMobile = {
  open: boolean
  handleOpen: () => void
}

export const useSidebarMobileStore = create<sidebarMobile>()((set) => ({
  open: false,
  handleOpen: () =>
    set((state) => ({
      open: !state.open
    }))
}))
