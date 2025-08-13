import { create } from 'zustand'

interface ScrollState {
  isScrolled: boolean
}

interface ScrollActions {
  setIsScrolled: (isScrolled: boolean) => void
}

type ScrollStore = ScrollState & ScrollActions

export const useScrollStore = create<ScrollStore>((set) => ({
  isScrolled: false,
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled })
}))
