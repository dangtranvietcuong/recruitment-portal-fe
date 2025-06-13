// Job-related types
import type { BaseEntity } from './common'

export interface Job extends BaseEntity {
  employerId: number
  companyId: number
  categoryId?: number
  title: string
  description: string
  requirements?: string
  benefits?: string
  jobType: string
  experienceLevel: string
  salaryMin?: number
  salaryMax?: number
  salaryCurrency: string
  salaryType: string
  location?: string
  remoteOption: boolean
  applicationDeadline?: string
  status: string
  viewsCount: number
  applicationsCount: number
}

export interface JobCategory extends BaseEntity {
  name: string
  description?: string
  icon?: string
  isActive: boolean
}

export interface JobCreateRequest {
  title: string
  description: string
  requirements?: string
  benefits?: string
  categoryId?: number
  jobType: string
  experienceLevel: string
  salaryMin?: number
  salaryMax?: number
  salaryCurrency?: string
  salaryType?: string
  location?: string
  remoteOption?: boolean
  applicationDeadline?: string
  skillIds?: number[]
}