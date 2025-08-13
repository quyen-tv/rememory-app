import { create } from 'zustand'

interface HeaederState {
  hideOnScroll: boolean
}

interface HeaderActions {
  setHideOnScroll: (hideOnScroll: boolean) => void
}

type HeaderStore = HeaederState & HeaderActions

export const useHeaderStore = create<HeaderStore>((set) => ({
  hideOnScroll: false,
  setHideOnScroll: (hideOnScroll) => set({ hideOnScroll })
}))
