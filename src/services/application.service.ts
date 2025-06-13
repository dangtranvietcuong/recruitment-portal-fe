import { apiClient } from '@/lib/api-client'
import type { ApiResponse } from '@/lib/api-client'
import { API_ENDPOINTS } from '@/constants'
import type { 
  Application, 
  ApplicationRequest, 
  ApplicationStatus, 
  PaginatedResponse, 
  PaginationParams 
} from '@/types'

export class ApplicationService {
  /**
   * Nộp đơn ứng tuyển
   */
  async applyForJob(applicationData: ApplicationRequest): Promise<Application> {
    try {
      const formData = new FormData()
      formData.append('jobId', applicationData.jobId.toString())
      
      if (applicationData.coverLetter) {
        formData.append('coverLetter', applicationData.coverLetter)
      }
      
      if (applicationData.cvFile) {
        formData.append('cvFile', applicationData.cvFile)
      }
      
      const response = await apiClient.post<Application>(
        API_ENDPOINTS.APPLICATIONS.CREATE,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể nộp đơn ứng tuyển')
    } catch (error) {
      console.error('Apply for job error:', error)
      throw error
    }
  }
  
  /**
   * Lấy danh sách đơn ứng tuyển của candidate
   */
  async getCandidateApplications(pagination: PaginationParams = {}): Promise<PaginatedResponse<Application>> {
    try {
      const params = new URLSearchParams()
      if (pagination.page !== undefined) params.append('page', pagination.page.toString())
      if (pagination.size !== undefined) params.append('size', pagination.size.toString())
      if (pagination.sort) params.append('sort', pagination.sort)
      if (pagination.direction) params.append('direction', pagination.direction)
      
      const response = await apiClient.get<PaginatedResponse<Application>>(
        `${API_ENDPOINTS.APPLICATIONS.BY_CANDIDATE}?${params.toString()}`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải danh sách đơn ứng tuyển')
    } catch (error) {
      console.error('Get candidate applications error:', error)
      throw error
    }
  }
  
  /**
   * Lấy danh sách đơn ứng tuyển cho một công việc (cho employer)
   */
  async getJobApplications(
    jobId: number, 
    pagination: PaginationParams = {},
    status?: ApplicationStatus
  ): Promise<PaginatedResponse<Application>> {
    try {
      const params = new URLSearchParams()
      if (pagination.page !== undefined) params.append('page', pagination.page.toString())
      if (pagination.size !== undefined) params.append('size', pagination.size.toString())
      if (pagination.sort) params.append('sort', pagination.sort)
      if (pagination.direction) params.append('direction', pagination.direction)
      if (status) params.append('status', status)
      
      const response = await apiClient.get<PaginatedResponse<Application>>(
        `${API_ENDPOINTS.APPLICATIONS.BY_JOB(jobId)}?${params.toString()}`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải danh sách đơn ứng tuyển')
    } catch (error) {
      console.error('Get job applications error:', error)
      throw error
    }
  }
  
  /**
   * Lấy tất cả đơn ứng tuyển của employer
   */
  async getEmployerApplications(
    pagination: PaginationParams = {},
    status?: ApplicationStatus
  ): Promise<PaginatedResponse<Application>> {
    try {
      const params = new URLSearchParams()
      if (pagination.page !== undefined) params.append('page', pagination.page.toString())
      if (pagination.size !== undefined) params.append('size', pagination.size.toString())
      if (pagination.sort) params.append('sort', pagination.sort)
      if (pagination.direction) params.append('direction', pagination.direction)
      if (status) params.append('status', status)
      
      const response = await apiClient.get<PaginatedResponse<Application>>(
        `${API_ENDPOINTS.APPLICATIONS.LIST}?${params.toString()}`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải danh sách đơn ứng tuyển')
    } catch (error) {
      console.error('Get employer applications error:', error)
      throw error
    }
  }
  
  /**
   * Lấy chi tiết đơn ứng tuyển
   */
  async getApplicationById(id: number): Promise<Application> {
    try {
      const response = await apiClient.get<Application>(
        API_ENDPOINTS.APPLICATIONS.DETAIL(id)
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không tìm thấy đơn ứng tuyển')
    } catch (error) {
      console.error('Get application by id error:', error)
      throw error
    }
  }
  
  /**
   * Cập nhật trạng thái đơn ứng tuyển (cho employer)
   */
  async updateApplicationStatus(
    id: number, 
    status: ApplicationStatus, 
    notes?: string
  ): Promise<Application> {
    try {
      const response = await apiClient.patch<Application>(
        API_ENDPOINTS.APPLICATIONS.UPDATE_STATUS(id),
        { status, notes }
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể cập nhật trạng thái đơn ứng tuyển')
    } catch (error) {
      console.error('Update application status error:', error)
      throw error
    }
  }
  
  /**
   * Rút đơn ứng tuyển (cho candidate)
   */
  async withdrawApplication(id: number): Promise<void> {
    try {
      const response = await apiClient.patch<void>(
        API_ENDPOINTS.APPLICATIONS.WITHDRAW(id)
      )
      
      if (!response.success) {
        throw new Error(response.message || 'Không thể rút đơn ứng tuyển')
      }
    } catch (error) {
      console.error('Withdraw application error:', error)
      throw error
    }
  }
  
  /**
   * Kiểm tra xem candidate đã ứng tuyển công việc này chưa
   */
  async hasApplied(jobId: number): Promise<boolean> {
    try {
      const response = await apiClient.get<{ hasApplied: boolean }>(
        `${API_ENDPOINTS.APPLICATIONS.LIST}/check?jobId=${jobId}`
      )
      
      if (response.success && response.data) {
        return response.data.hasApplied
      }
      
      return false
    } catch (error) {
      console.error('Check has applied error:', error)
      return false
    }
  }
  
  /**
   * Lấy thống kê đơn ứng tuyển theo trạng thái
   */
  async getApplicationStats(): Promise<Record<ApplicationStatus, number>> {
    try {
      const response = await apiClient.get<Record<ApplicationStatus, number>>(
        `${API_ENDPOINTS.APPLICATIONS.LIST}/stats`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải thống kê đơn ứng tuyển')
    } catch (error) {
      console.error('Get application stats error:', error)
      throw error
    }
  }
  
  /**
   * Bulk update trạng thái nhiều đơn ứng tuyển
   */
  async bulkUpdateStatus(
    applicationIds: number[], 
    status: ApplicationStatus, 
    notes?: string
  ): Promise<void> {
    try {
      const response = await apiClient.patch<void>(
        `${API_ENDPOINTS.APPLICATIONS.LIST}/bulk-update`,
        { applicationIds, status, notes }
      )
      
      if (!response.success) {
        throw new Error(response.message || 'Không thể cập nhật trạng thái đơn ứng tuyển')
      }
    } catch (error) {
      console.error('Bulk update status error:', error)
      throw error
    }
  }
  
  /**
   * Tải xuống CV từ đơn ứng tuyển
   */
  async downloadCV(applicationId: number): Promise<Blob> {
    try {
      const response = await apiClient.get(
        `${API_ENDPOINTS.APPLICATIONS.DETAIL(applicationId)}/cv`,
        { responseType: 'blob' }
      )
      
      return response.data
    } catch (error) {
      console.error('Download CV error:', error)
      throw error
    }
  }
  
  /**
   * Lấy đơn ứng tuyển gần đây
   */
  async getRecentApplications(limit: number = 5): Promise<Application[]> {
    try {
      const response = await apiClient.get<Application[]>(
        `${API_ENDPOINTS.APPLICATIONS.LIST}/recent?limit=${limit}`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải đơn ứng tuyển gần đây')
    } catch (error) {
      console.error('Get recent applications error:', error)
      throw error
    }
  }
}

export const applicationService = new ApplicationService()