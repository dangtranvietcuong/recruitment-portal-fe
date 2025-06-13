import { Application } from './application'
import { Job, JobCategory } from './job'
import { User } from './user'

// Export all types from modular files
export * from './common'
export * from './user'
export * from './job'
export * from './application'

// Re-export enums from constants to avoid circular imports
export type {
  JobType,
  ExperienceLevel,
  ApplicationStatus,
  UserRole,
  CompanySize,
  SalaryType,
  SkillLevel,
  InterviewType,
  Gender
} from '@/constants/enums'

// Additional interfaces that were in the original file
export interface Skill {
  id: number
  name: string
  category?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CandidateSkill {
  id: number
  candidateId: number
  skillId: number
  proficiencyLevel: string
  yearsOfExperience: number
  skill: Skill
}

export interface JobSkill {
  id: number
  jobId: number
  skillId: number
  proficiencyLevel: string
  isRequired: boolean
  skill: Skill
}

export interface WorkExperience {
  id: number
  candidateId: number
  companyName: string
  position: string
  description?: string
  startDate: string
  endDate?: string
  isCurrent: boolean
  location?: string
  createdAt: string
  updatedAt: string
}

export interface Education {
  id: number
  candidateId: number
  institutionName: string
  degree: string
  fieldOfStudy?: string
  startDate: string
  endDate?: string
  isCurrent: boolean
  gpa?: string
  description?: string
  createdAt: string
  updatedAt: string
}

export interface Candidate {
  id: number
  userId: number
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: string
  gender?: string
  address?: string
  city?: string
  country?: string
  profilePicture?: string
  summary?: string
  cvFileUrl?: string
  portfolioUrl?: string
  linkedinUrl?: string
  githubUrl?: string
  websiteUrl?: string
  skills: CandidateSkill[]
  workExperiences: WorkExperience[]
  educations: Education[]
  user: User
  createdAt: string
  updatedAt: string
}

export interface Employer {
  id: number
  userId: number
  companyId: number
  firstName: string
  lastName: string
  position?: string
  phone?: string
  isCompanyAdmin: boolean
  company: Company
  user: User
  createdAt: string
  updatedAt: string
}

export interface Company {
  id: number
  companyName: string
  companySize?: string
  industry?: string
  description?: string
  websiteUrl?: string
  logoUrl?: string
  address?: string
  city?: string
  country?: string
  phone?: string
  email?: string
  foundedYear?: number
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface Interview {
  id: number
  applicationId: number
  interviewerId: number
  interviewType: string
  scheduledAt: string
  durationMinutes: number
  location?: string
  meetingLink?: string
  status: string
  notes?: string
  feedback?: string
  rating?: number
  application: Application
  interviewer: User
  createdAt: string
  updatedAt: string
}

export interface Notification {
  id: number
  userId: number
  title: string
  message: string
  type: string
  isRead: boolean
  relatedId?: number
  relatedType?: string
  createdAt: string
  updatedAt: string
}

export interface ApplicationStatusHistory {
  id: number
  applicationId: number
  oldStatus?: string
  newStatus: string
  changedBy?: number
  notes?: string
  changedAt: string
  createdAt: string
  updatedAt: string
}

// Form and dashboard interfaces
export interface SearchJobsForm {
  keyword?: string
  location?: string
  categoryId?: number
  jobType?: string
  experienceLevel?: string
  salaryMin?: number
  salaryMax?: number
  remoteOption?: boolean
}

export interface FilterOptions {
  categories: JobCategory[]
  jobTypes: Array<{ label: string; value: string }>
  experienceLevels: Array<{ label: string; value: string }>
  locations: string[]
}

export interface CandidateDashboard {
  totalApplications: number
  pendingApplications: number
  interviewsScheduled: number
  profileViews: number
  recentApplications: Application[]
  recommendedJobs: Job[]
}

export interface EmployerDashboard {
  totalJobs: number
  activeJobs: number
  totalApplications: number
  newApplications: number
  jobsData: Job[]
  applicationsData: Application[]
}

export interface AdminDashboard {
  totalUsers: number
  totalJobs: number
  totalApplications: number
  totalCompanies: number
  monthlyStats: Array<{
    month: string
    users: number
    jobs: number
    applications: number
  }>
}

export interface ValidationError {
  field: string
  message: string
}

export interface ApiErrorResponse {
  message: string
  errors?: ValidationError[]
  status: number
}

export interface ProfileUpdateRequest {
  firstName?: string
  lastName?: string
  phone?: string
  dateOfBirth?: string
  gender?: string
  address?: string
  city?: string
  country?: string
  summary?: string
  portfolioUrl?: string
  linkedinUrl?: string
  githubUrl?: string
  websiteUrl?: string
}