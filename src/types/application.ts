// Application-related types
import type { BaseEntity } from './common'

export interface Application extends BaseEntity {
  jobId: number
  candidateId: number
  coverLetter?: string
  cvFileUrl?: string
  status: string
  appliedAt: string
  notes?: string
}

export interface ApplicationRequest {
  jobId: number
  coverLetter?: string
  cvFile?: File
}