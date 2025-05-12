// components/counters/global-counter-display.tsx
"use client"

import { useCounterStore } from "@/lib/store/counter-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GlobalCounterDisplay() {
  const globalCount = useCounterStore((state) => state.globalCount)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Contador Global</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center text-4xl font-bold">
          {globalCount}
        </div>
      </CardContent>
    </Card>
  )
}