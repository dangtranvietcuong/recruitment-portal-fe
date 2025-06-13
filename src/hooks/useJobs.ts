import { useState, useEffect, useCallback } from 'react'
import type { Job, PaginatedResponse, PaginationParams, SearchFilters } from '@/types'
import { jobService } from '@/services/job.service'

interface UseJobsOptions {
  autoFetch?: boolean
  initialFilters?: SearchFilters
  initialPagination?: PaginationParams
}

interface UseJobsReturn {
  jobs: Job[]
  totalElements: number
  totalPages: number
  currentPage: number
  loading: boolean
  error: string | null
  filters: SearchFilters
  pagination: PaginationParams
  fetchJobs: () => Promise<void>
  searchJobs: (keyword: string) => Promise<void>
  setFilters: (filters: SearchFilters) => void
  setPagination: (pagination: PaginationParams) => void
  clearFilters: () => void
  refetch: () => Promise<void>
}

export function useJobs(options: UseJobsOptions = {}): UseJobsReturn {
  const {
    autoFetch = true,
    initialFilters = {},
    initialPagination = { page: 0, size: 10 }
  } = options

  const [jobs, setJobs] = useState<Job[]>([])
  const [totalElements, setTotalElements] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(initialPagination.page || 0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFiltersState] = useState<SearchFilters>(initialFilters)
  const [pagination, setPaginationState] = useState<PaginationParams>(initialPagination)

  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response: PaginatedResponse<Job> = await jobService.getJobs(pagination, filters)
      
      setJobs(response.content)
      setTotalElements(response.totalElements)
      setTotalPages(response.totalPages)
      setCurrentPage(response.number)
    } catch (err: any) {
      setError(err.message || 'Không thể tải danh sách công việc')
      console.error('Fetch jobs error:', err)
    } finally {
      setLoading(false)
    }
  }, [pagination, filters])

  const searchJobs = useCallback(async (keyword: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const searchFilters = { ...filters, keyword }
      const searchPagination = { ...pagination, page: 0 } // Reset to first page when searching
      
      const response: PaginatedResponse<Job> = await jobService.searchJobs(
        keyword,
        searchFilters,
        searchPagination
      )
      
      setJobs(response.content)
      setTotalElements(response.totalElements)
      setTotalPages(response.totalPages)
      setCurrentPage(response.number)
      setFiltersState(searchFilters)
      setPaginationState(searchPagination)
    } catch (err: any) {
      setError(err.message || 'Không thể tìm kiếm công việc')
      console.error('Search jobs error:', err)
    } finally {
      setLoading(false)
    }
  }, [filters, pagination])

  const setFilters = useCallback((newFilters: SearchFilters) => {
    setFiltersState(newFilters)
    // Reset to first page when filters change
    setPaginationState(prev => ({ ...prev, page: 0 }))
  }, [])

  const setPagination = useCallback((newPagination: PaginationParams) => {
    setPaginationState(prev => ({ ...prev, ...newPagination }))
  }, [])

  const clearFilters = useCallback(() => {
    setFiltersState({})
    setPaginationState({ ...initialPagination, page: 0 })
  }, [initialPagination])

  const refetch = useCallback(() => {
    return fetchJobs()
  }, [fetchJobs])

  // Auto fetch on mount and when pagination/filters change
  useEffect(() => {
    if (autoFetch) {
      fetchJobs()
    }
  }, [fetchJobs, autoFetch])

  return {
    jobs,
    totalElements,
    totalPages,
    currentPage,
    loading,
    error,
    filters,
    pagination,
    fetchJobs,
    searchJobs,
    setFilters,
    setPagination,
    clearFilters,
    refetch
  }
}