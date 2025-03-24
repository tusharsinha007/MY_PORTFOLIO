'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400 max-w-md">
        An unexpected error occurred. This has been logged and we're working on it.
      </p>
      <div className="flex gap-4">
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline"
        >
          Refresh Page
        </Button>
        <Button 
          onClick={() => reset()}
          variant="default"
        >
          Try Again
        </Button>
      </div>
    </div>
  )
} 