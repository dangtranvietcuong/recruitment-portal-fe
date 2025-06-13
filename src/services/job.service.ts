import { apiClient } from '@/lib/api-client'
import type { ApiResponse } from '@/lib/api-client'
import { API_ENDPOINTS } from '@/constants'
import type { 
  Job, 
  JobCreateRequest, 
  JobCategory, 
  Skill, 
  PaginatedResponse, 
  PaginationParams, 
  SearchFilters 
} from '@/types'

export class JobService {
  /**
   * Lấy danh sách công việc với phân trang và filter
   */
  async getJobs(
    pagination: PaginationParams = {},
    filters: SearchFilters = {}
  ): Promise<PaginatedResponse<Job>> {
    try {
      const params = new URLSearchParams()
      
      // Pagination
      if (pagination.page !== undefined) params.append('page', pagination.page.toString())
      if (pagination.size !== undefined) params.append('size', pagination.size.toString())
      if (pagination.sort) params.append('sort', pagination.sort)
      if (pagination.direction) params.append('direction', pagination.direction)
      
      // Filters
      if (filters.keyword) params.append('keyword', filters.keyword)
      if (filters.location) params.append('location', filters.location)
      if (filters.categoryId) params.append('categoryId', filters.categoryId.toString())
      if (filters.jobType) params.append('jobType', filters.jobType)
      if (filters.experienceLevel) params.append('experienceLevel', filters.experienceLevel)
      if (filters.salaryMin) params.append('salaryMin', filters.salaryMin.toString())
      if (filters.salaryMax) params.append('salaryMax', filters.salaryMax.toString())
      if (filters.remoteOption !== undefined) params.append('remoteOption', filters.remoteOption.toString())
      
      const response = await apiClient.get<PaginatedResponse<Job>>(
        `${API_ENDPOINTS.JOBS.LIST}?${params.toString()}`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải danh sách công việc')
    } catch (error) {
      console.error('Get jobs error:', error)
      throw error
    }
  }
  
  /**
   * Tìm kiếm công việc
   */
  async searchJobs(
    keyword: string,
    filters: SearchFilters = {},
    pagination: PaginationParams = {}
  ): Promise<PaginatedResponse<Job>> {
    try {
      const searchFilters = { ...filters, keyword }
      return await this.getJobs(pagination, searchFilters)
    } catch (error) {
      console.error('Search jobs error:', error)
      throw error
    }
  }
  
  /**
   * Lấy chi tiết công việc
   */
  async getJobById(id: number): Promise<Job> {
    try {
      const response = await apiClient.get<Job>(
        API_ENDPOINTS.JOBS.DETAIL(id)
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không tìm thấy công việc')
    } catch (error) {
      console.error('Get job by id error:', error)
      throw error
    }
  }
  
  /**
   * Tạo công việc mới (cho employer)
   */
  async createJob(jobData: JobCreateRequest): Promise<Job> {
    try {
      const response = await apiClient.post<Job>(
        API_ENDPOINTS.JOBS.CREATE,
        jobData
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tạo công việc')
    } catch (error) {
      console.error('Create job error:', error)
      throw error
    }
  }
  
  /**
   * Cập nhật công việc
   */
  async updateJob(id: number, jobData: Partial<JobCreateRequest>): Promise<Job> {
    try {
      const response = await apiClient.put<Job>(
        API_ENDPOINTS.JOBS.UPDATE(id),
        jobData
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể cập nhật công việc')
    } catch (error) {
      console.error('Update job error:', error)
      throw error
    }
  }
  
  /**
   * Xóa công việc
   */
  async deleteJob(id: number): Promise<void> {
    try {
      const response = await apiClient.delete<void>(
        API_ENDPOINTS.JOBS.DELETE(id)
      )
      
      if (!response.success) {
        throw new Error(response.message || 'Không thể xóa công việc')
      }
    } catch (error) {
      console.error('Delete job error:', error)
      throw error
    }
  }
  
  /**
   * Lấy danh sách danh mục công việc
   */
  async getJobCategories(): Promise<JobCategory[]> {
    try {
      const response = await apiClient.get<JobCategory[]>(
        API_ENDPOINTS.JOBS.CATEGORIES
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải danh mục công việc')
    } catch (error) {
      console.error('Get job categories error:', error)
      throw error
    }
  }
  
  /**
   * Lấy danh sách kỹ năng
   */
  async getSkills(): Promise<Skill[]> {
    try {
      const response = await apiClient.get<Skill[]>(
        API_ENDPOINTS.JOBS.SKILLS
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải danh sách kỹ năng')
    } catch (error) {
      console.error('Get skills error:', error)
      throw error
    }
  }
  
  /**
   * Lấy công việc được đề xuất cho candidate
   */
  async getRecommendedJobs(candidateId: number): Promise<Job[]> {
    try {
      const response = await apiClient.get<Job[]>(
        `${API_ENDPOINTS.JOBS.LIST}/recommended/${candidateId}`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải công việc được đề xuất')
    } catch (error) {
      console.error('Get recommended jobs error:', error)
      throw error
    }
  }
  
  /**
   * Lưu công việc yêu thích
   */
  async saveJob(jobId: number): Promise<void> {
    try {
      const response = await apiClient.post<void>(
        `${API_ENDPOINTS.JOBS.DETAIL(jobId)}/save`
      )
      
      if (!response.success) {
        throw new Error(response.message || 'Không thể lưu công việc')
      }
    } catch (error) {
      console.error('Save job error:', error)
      throw error
    }
  }
  
  /**
   * Bỏ lưu công việc yêu thích
   */
  async unsaveJob(jobId: number): Promise<void> {
    try {
      const response = await apiClient.delete<void>(
        `${API_ENDPOINTS.JOBS.DETAIL(jobId)}/save`
      )
      
      if (!response.success) {
        throw new Error(response.message || 'Không thể bỏ lưu công việc')
      }
    } catch (error) {
      console.error('Unsave job error:', error)
      throw error
    }
  }
  
  /**
   * Lấy danh sách công việc đã lưu
   */
  async getSavedJobs(pagination: PaginationParams = {}): Promise<PaginatedResponse<Job>> {
    try {
      const params = new URLSearchParams()
      if (pagination.page !== undefined) params.append('page', pagination.page.toString())
      if (pagination.size !== undefined) params.append('size', pagination.size.toString())
      
      const response = await apiClient.get<PaginatedResponse<Job>>(
        `${API_ENDPOINTS.JOBS.LIST}/saved?${params.toString()}`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải danh sách công việc đã lưu')
    } catch (error) {
      console.error('Get saved jobs error:', error)
      throw error
    }
  }
  
  /**
   * Lấy thống kê công việc của employer
   */
  async getEmployerJobStats(): Promise<any> {
    try {
      const response = await apiClient.get<any>(
        `${API_ENDPOINTS.JOBS.LIST}/stats`
      )
      
      if (response.success && response.data) {
        return response.data
      }
      
      throw new Error(response.message || 'Không thể tải thống kê công việc')
    } catch (error) {
      console.error('Get employer job stats error:', error)
      throw error
    }
  }
}

export const jobService = new JobService()