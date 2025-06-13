// Standalone enums for runtime usage in constants
// These are separate from types to avoid circular imports

export const JobType = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  FREELANCE: 'FREELANCE'
} as const

export const ExperienceLevel = {
  ENTRY: 'ENTRY',
  MID: 'MID',
  SENIOR: 'SENIOR',
  LEAD: 'LEAD',
  EXECUTIVE: 'EXECUTIVE'
} as const

export const ApplicationStatus = {
  PENDING: 'PENDING',
  REVIEWING: 'REVIEWING',
  SHORTLISTED: 'SHORTLISTED',
  INTERVIEW_SCHEDULED: 'INTERVIEW_SCHEDULED',
  INTERVIEWED: 'INTERVIEWED',
  OFFERED: 'OFFERED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  WITHDRAWN: 'WITHDRAWN'
} as const

export const UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EMPLOYER: 'EMPLOYER',
  CANDIDATE: 'CANDIDATE',
  HR_MANAGER: 'HR_MANAGER',
  RECRUITER: 'RECRUITER'
} as const

export const CompanySize = {
  STARTUP: '1-10',
  SMALL: '11-50',
  MEDIUM: '51-200',
  LARGE: '201-500',
  ENTERPRISE: '500+'
} as const

export const SalaryType = {
  HOURLY: 'HOURLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
} as const

export const SkillLevel = {
  BASIC: 'BASIC',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
} as const

export const InterviewType = {
  PHONE: 'PHONE',
  VIDEO: 'VIDEO',
  IN_PERSON: 'IN_PERSON',
  ONLINE_TEST: 'ONLINE_TEST'
} as const

export const Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
} as const

// Export types
export type JobType = typeof JobType[keyof typeof JobType]
export type ExperienceLevel = typeof ExperienceLevel[keyof typeof ExperienceLevel]
export type ApplicationStatus = typeof ApplicationStatus[keyof typeof ApplicationStatus]
export type UserRole = typeof UserRole[keyof typeof UserRole]
export type CompanySize = typeof CompanySize[keyof typeof CompanySize]
export type SalaryType = typeof SalaryType[keyof typeof SalaryType]
export type SkillLevel = typeof SkillLevel[keyof typeof SkillLevel]
export type InterviewType = typeof InterviewType[keyof typeof InterviewType]
export type Gender = typeof Gender[keyof typeof Gender]