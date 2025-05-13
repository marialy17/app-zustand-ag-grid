// app/page.tsx
import { GlobalCounterDisplay } from "@/components/counters/global-counter-display"
import { GlobalCounterController } from "@/components/counters/global-counter-controller"
import { LocalCounter } from "@/components/counters/local-counter"
import { PersistenceInfo } from "@/components/counters/persistence-info"

export default function Home() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Zustand Counter Lab
      </h1>
      <div className="grid gap-8 place-items-center">
        <GlobalCounterDisplay />
        <GlobalCounterController />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <LocalCounter title="Contador Local 1" />
          <LocalCounter title="Contador Local 2" />
        </div>
        <PersistenceInfo />
      </div>
    </div>
  )
}