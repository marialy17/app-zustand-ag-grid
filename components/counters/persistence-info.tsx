// components/counters/persistence-info.tsx
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PersistenceInfo() {
  const [storageData, setStorageData] = useState<string | null>(null)

  const refreshStorageData = () => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('counter-storage')
      setStorageData(data)
    }
  }

  useEffect(() => {
    refreshStorageData()
  }, [])

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Información de Persistencia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">
            Datos almacenados en localStorage:
          </p>
          <pre className="bg-muted p-2 rounded-md overflow-auto text-xs">
            {storageData ? JSON.stringify(JSON.parse(storageData), null, 2) : 'No hay datos'}
          </pre>
        </div>
        <Button onClick={refreshStorageData} variant="outline" className="w-full">
          Actualizar datos
        </Button>
      </CardContent>
    </Card>
  )
}