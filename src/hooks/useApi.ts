import { useState, useCallback } from 'react'
import type { ApiError } from '@/lib/api-client'

interface UseApiReturn<T> {
  data: T | null
  loading: boolean
  error: string | null
  execute: (...args: any[]) => Promise<T>
  reset: () => void
}

/**
 * Custom hook để xử lý API calls với loading và error states
 */
export function useApi<T>(
  apiFunction: (...args: any[]) => Promise<T>
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const execute = useCallback(async (...args: any[]): Promise<T> => {
    try {
      setLoading(true)
      setError(null)
      
      const result = await apiFunction(...args)
      setData(result)
      
      return result
    } catch (err: any) {
      const errorMessage = err.message || 'Đã xảy ra lỗi'
      setError(errorMessage)
      console.error('API call error:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [apiFunction])

  const reset = useCallback(() => {
    setData(null)
    setLoading(false)
    setError(null)
  }, [])

  return {
    data,
    loading,
    error,
    execute,
    reset
  }
}

/**
 * Hook cho async operations với loading state
 */
export function useAsync<T, P extends any[] = []>(
  asyncFunction: (...args: P) => Promise<T>,
  immediate = false
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(
    async (...args: P): Promise<T | null> => {
      try {
        setLoading(true)
        setError(null)
        
        const result = await asyncFunction(...args)
        setData(result)
        
        return result
      } catch (err: any) {
        setError(err)
        console.error('Async operation error:', err)
        return null
      } finally {
        setLoading(false)
      }
    },
    [asyncFunction]
  )

  const reset = useCallback(() => {
    setData(null)
    setLoading(false)
    setError(null)
  }, [])

  return {
    data,
    loading,
    error,
    execute,
    reset
  }
}

/**
 * Hook để xử lý form submission với loading state
 */
export function useFormSubmit<T>(
  submitFunction: (data: T) => Promise<void>
) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = useCallback(async (data: T) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)
      
      await submitFunction(data)
      setSuccess(true)
    } catch (err: any) {
      const errorMessage = err.message || 'Đã xảy ra lỗi khi gửi form'
      setError(errorMessage)
      console.error('Form submit error:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [submitFunction])

  const reset = useCallback(() => {
    setLoading(false)
    setError(null)
    setSuccess(false)
  }, [])

  return {
    loading,
    error,
    success,
    submit,
    reset
  }
}