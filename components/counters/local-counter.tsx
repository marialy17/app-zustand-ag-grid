// components/counters/local-counter.tsx
"use client"

import { useState } from "react"
import { useCounterStore } from "@/lib/store/counter-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface LocalCounterProps {
  title: string
}

export function LocalCounter({ title }: LocalCounterProps) {
  const [count, setCount] = useState(0)
  const globalCount = useCounterStore((state) => state.globalCount)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  const syncWithGlobal = () => setCount(globalCount)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center text-4xl font-bold mb-4">
          {count}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" onClick={decrement}>-</Button>
        <Button variant="outline" onClick={reset}>Reset</Button>
        <Button variant="outline" onClick={increment}>+</Button>
        <Button onClick={syncWithGlobal}>Sincronizar con Global</Button>
      </CardFooter>
    </Card>
  )
}