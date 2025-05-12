// lib/store/counter-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CounterState = {
  globalCount: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: (count: number) => void
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      globalCount: 0,
      increment: () => set((state) => ({ globalCount: state.globalCount + 1 })),
      decrement: () => set((state) => ({ globalCount: state.globalCount - 1 })),
      reset: () => set({ globalCount: 0 }),
      setCount: (count) => set({ globalCount: count }),
    }),
    {
      name: 'counter-storage',
    }
  )
)