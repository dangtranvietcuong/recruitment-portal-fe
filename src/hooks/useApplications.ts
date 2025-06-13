import { useState, useEffect, useCallback } from 'react'
import type { Application, ApplicationStatus, PaginatedResponse, PaginationParams } from '@/types'
import { applicationService } from '@/services/application.service'

interface UseApplicationsOptions {
  autoFetch?: boolean
  jobId?: number // For employer to get applications for specific job
  candidateView?: boolean // For candidate to get their own applications
  initialPagination?: PaginationParams
}

interface UseApplicationsReturn {
  applications: Application[]
  totalElements: number
  totalPages: number
  currentPage: number
  loading: boolean
  error: string | null
  pagination: PaginationParams
  fetchApplications: () => Promise<void>
  updateApplicationStatus: (id: number, status: ApplicationStatus, notes?: string) => Promise<void>
  withdrawApplication: (id: number) => Promise<void>
  setPagination: (pagination: PaginationParams) => void
  refetch: () => Promise<void>
}

export function useApplications(options: UseApplicationsOptions = {}): UseApplicationsReturn {
  const {
    autoFetch = true,
    jobId,
    candidateView = false,
    initialPagination = { page: 0, size: 10 }
  } = options

  const [applications, setApplications] = useState<Application[]>([])
  const [totalElements, setTotalElements] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(initialPagination.page || 0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPaginationState] = useState<PaginationParams>(initialPagination)

  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      let response: PaginatedResponse<Application>
      
      if (candidateView) {
        // Lấy đơn ứng tuyển của candidate
        response = await applicationService.getCandidateApplications(pagination)
      } else if (jobId) {
        // Lấy đơn ứng tuyển cho một công việc cụ thể
        response = await applicationService.getJobApplications(jobId, pagination)
      } else {
        // Lấy tất cả đơn ứng tuyển của employer
        response = await applicationService.getEmployerApplications(pagination)
      }
      
      setApplications(response.content)
      setTotalElements(response.totalElements)
      setTotalPages(response.totalPages)
      setCurrentPage(response.number)
    } catch (err: any) {
      setError(err.message || 'Không thể tải danh sách đơn ứng tuyển')
      console.error('Fetch applications error:', err)
    } finally {
      setLoading(false)
    }
  }, [pagination, jobId, candidateView])

  const updateApplicationStatus = useCallback(async (
    id: number, 
    status: ApplicationStatus, 
    notes?: string
  ) => {
    try {
      setLoading(true)
      const updatedApplication = await applicationService.updateApplicationStatus(id, status, notes)
      
      // Cập nhật application trong danh sách
      setApplications(prev => 
        prev.map(app => app.id === id ? updatedApplication : app)
      )
    } catch (err: any) {
      setError(err.message || 'Không thể cập nhật trạng thái đơn ứng tuyển')
      console.error('Update application status error:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const withdrawApplication = useCallback(async (id: number) => {
    try {
      setLoading(true)
      await applicationService.withdrawApplication(id)
      
      // Cập nhật trạng thái trong danh sách
      setApplications(prev => 
        prev.map(app => 
          app.id === id 
            ? { ...app, status: ApplicationStatus.WITHDRAWN }
            : app
        )
      )
    } catch (err: any) {
      setError(err.message || 'Không thể rút đơn ứng tuyển')
      console.error('Withdraw application error:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const setPagination = useCallback((newPagination: PaginationParams) => {
    setPaginationState(prev => ({ ...prev, ...newPagination }))
  }, [])

  const refetch = useCallback(() => {
    return fetchApplications()
  }, [fetchApplications])

  // Auto fetch on mount and when pagination changes
  useEffect(() => {
    if (autoFetch) {
      fetchApplications()
    }
  }, [fetchApplications, autoFetch])

  return {
    applications,
    totalElements,
    totalPages,
    currentPage,
    loading,
    error,
    pagination,
    fetchApplications,
    updateApplicationStatus,
    withdrawApplication,
    setPagination,
    refetch
  }
}