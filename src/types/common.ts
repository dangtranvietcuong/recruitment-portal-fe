// Core types used across the application
export interface BaseEntity {
  id: number
  createdAt: string
  updatedAt: string
}

export interface PaginationParams {
  page?: number
  size?: number
  sort?: string
  direction?: 'ASC' | 'DESC'
}

export interface PaginatedResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  size: number
  number: number
  first: boolean
  last: boolean
  empty: boolean
}

export interface SearchFilters {
  keyword?: string
  location?: string
  categoryId?: number
  jobType?: string
  experienceLevel?: string
  salaryMin?: number
  salaryMax?: number
  remoteOption?: boolean
}