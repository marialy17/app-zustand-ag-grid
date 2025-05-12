// components/counters/global-counter-controller.tsx
"use client"

import { useCounterStore } from "@/lib/store/counter-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function GlobalCounterController() {
  const { globalCount, increment, decrement, reset, setCount } = useCounterStore()
  const [inputValue, setInputValue] = useState("")

  const handleSetCount = () => {
    const newCount = parseInt(inputValue)
    if (!isNaN(newCount)) {
      setCount(newCount)
      setInputValue("")
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Control del Contador Global</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center text-4xl font-bold mb-4">
          {globalCount}
        </div>
        <div className="flex gap-2 mt-4">
          <Input
            type="number"
            placeholder="Nuevo valor"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleSetCount}>Establecer</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" onClick={decrement}>-</Button>
        <Button variant="outline" onClick={reset}>Reset</Button>
        <Button variant="outline" onClick={increment}>+</Button>
      </CardFooter>
    </Card>
  )
}