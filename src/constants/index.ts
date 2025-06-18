// Import enums from local constants to avoid circular imports
import { 
  JobType, 
  ExperienceLevel, 
  ApplicationStatus, 
  UserRole, 
  CompanySize, 
  SalaryType, 
  SkillLevel, 
  InterviewType, 
  Gender 
} from './enums'

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email'
  },
  
  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
    UPLOAD_AVATAR: '/user/upload-avatar'
  },
  
  // Jobs
  JOBS: {
    LIST: '/jobs',
    CREATE: '/jobs',
    DETAIL: (id: number) => `/jobs/${id}`,
    UPDATE: (id: number) => `/jobs/${id}`,
    DELETE: (id: number) => `/jobs/${id}`,
    SEARCH: '/jobs/search',
    CATEGORIES: '/jobs/categories',
    SKILLS: '/jobs/skills'
  },
  
  // Applications
  APPLICATIONS: {
    LIST: '/applications',
    CREATE: '/applications',
    DETAIL: (id: number) => `/applications/${id}`,
    UPDATE_STATUS: (id: number) => `/applications/${id}/status`,
    WITHDRAW: (id: number) => `/applications/${id}/withdraw`,
    BY_JOB: (jobId: number) => `/applications/job/${jobId}`,
    BY_CANDIDATE: '/applications/candidate'
  },
  
  // Companies
  COMPANIES: {
    LIST: '/companies',
    CREATE: '/companies',
    DETAIL: (id: number) => `/companies/${id}`,
    UPDATE: (id: number) => `/companies/${id}`,
    SEARCH: '/companies/search'
  },
  
  // Interviews
  INTERVIEWS: {
    LIST: '/interviews',
    CREATE: '/interviews',
    DETAIL: (id: number) => `/interviews/${id}`,
    UPDATE: (id: number) => `/interviews/${id}`,
    CANCEL: (id: number) => `/interviews/${id}/cancel`
  },
  
  // Admin
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    JOBS: '/admin/jobs',
    COMPANIES: '/admin/companies',
    STATISTICS: '/admin/statistics'
  },
  
  // Files
  FILES: {
    UPLOAD_CV: '/files/upload/cv',
    UPLOAD_AVATAR: '/files/upload/avatar',
    UPLOAD_COMPANY_LOGO: '/files/upload/company-logo',
    DOWNLOAD: (filename: string) => `/files/download/${filename}`
  },
  
  // Notifications
  NOTIFICATIONS: {
    LIST: '/notifications',
    MARK_READ: (id: number) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/mark-all-read',
    COUNT_UNREAD: '/notifications/count-unread'
  }
} as const

// Label mappings - using enum values
export const JOB_TYPE_LABELS = {
  [JobType.FULL_TIME]: 'Full Time',
  [JobType.PART_TIME]: 'Part Time',
  [JobType.CONTRACT]: 'Contract',
  [JobType.INTERNSHIP]: 'Internship',
  [JobType.FREELANCE]: 'Freelance'
} as const

export const EXPERIENCE_LEVEL_LABELS = {
  [ExperienceLevel.ENTRY]: 'Entry Level',
  [ExperienceLevel.MID]: 'Mid Level (2-5 years)',
  [ExperienceLevel.SENIOR]: 'Senior Level (5+ years)',
  [ExperienceLevel.LEAD]: 'Team Lead',
  [ExperienceLevel.EXECUTIVE]: 'Executive'
} as const

export const APPLICATION_STATUS_LABELS = {
  [ApplicationStatus.PENDING]: 'Pending',
  [ApplicationStatus.REVIEWING]: 'Under Review',
  [ApplicationStatus.SHORTLISTED]: 'Shortlisted',
  [ApplicationStatus.INTERVIEW_SCHEDULED]: 'Interview Scheduled',
  [ApplicationStatus.INTERVIEWED]: 'Interviewed',
  [ApplicationStatus.OFFERED]: 'Offered',
  [ApplicationStatus.ACCEPTED]: 'Accepted',
  [ApplicationStatus.REJECTED]: 'Rejected',
  [ApplicationStatus.WITHDRAWN]: 'Withdrawn'
} as const

export const USER_ROLE_LABELS = {
  [UserRole.SUPER_ADMIN]: 'Super Admin',
  [UserRole.ADMIN]: 'Administrator',
  [UserRole.EMPLOYER]: 'Employer',
  [UserRole.CANDIDATE]: 'Job Seeker',
  [UserRole.HR_MANAGER]: 'HR Manager',
  [UserRole.RECRUITER]: 'Recruiter'
} as const

export const COMPANY_SIZE_LABELS = {
  [CompanySize.STARTUP]: '1-10 employees',
  [CompanySize.SMALL]: '11-50 employees',
  [CompanySize.MEDIUM]: '51-200 employees',
  [CompanySize.LARGE]: '201-500 employees',
  [CompanySize.ENTERPRISE]: '500+ employees'
} as const

export const SALARY_TYPE_LABELS = {
  [SalaryType.HOURLY]: 'Per Hour',
  [SalaryType.MONTHLY]: 'Per Month',
  [SalaryType.YEARLY]: 'Per Year'
} as const

export const SKILL_LEVEL_LABELS = {
  [SkillLevel.BASIC]: 'Basic',
  [SkillLevel.INTERMEDIATE]: 'Intermediate',
  [SkillLevel.ADVANCED]: 'Advanced',
  [SkillLevel.EXPERT]: 'Expert'
} as const

export const INTERVIEW_TYPE_LABELS = {
  [InterviewType.PHONE]: 'Phone Call',
  [InterviewType.VIDEO]: 'Video Call',
  [InterviewType.IN_PERSON]: 'In Person',
  [InterviewType.ONLINE_TEST]: 'Online Test'
} as const

export const GENDER_LABELS = {
  [Gender.MALE]: 'Male',
  [Gender.FEMALE]: 'Female',
  [Gender.OTHER]: 'Other'
} as const

// Color mappings for status
export const APPLICATION_STATUS_COLORS = {
  [ApplicationStatus.PENDING]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
  [ApplicationStatus.REVIEWING]: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
  [ApplicationStatus.SHORTLISTED]: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
  [ApplicationStatus.INTERVIEW_SCHEDULED]: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300',
  [ApplicationStatus.INTERVIEWED]: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300',
  [ApplicationStatus.OFFERED]: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
  [ApplicationStatus.ACCEPTED]: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300',
  [ApplicationStatus.REJECTED]: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
  [ApplicationStatus.WITHDRAWN]: 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300'
} as const

export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+84|84|0)?[3|5|7|8|9][0-9]{8}$/,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
  ALLOWED_CV_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
}

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE: 0
}

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
  LANGUAGE: 'language',
  SEARCH_HISTORY: 'search_history',
  SAVED_JOBS: 'saved_jobs'
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  
  JOBS: '/jobs',
  JOB_DETAIL: '/jobs/:id',
  COMPANIES: '/companies',
  COMPANY_DETAIL: '/companies/:id',
  CANDIDATES: '/candidates',
  
  CANDIDATE: {
    DASHBOARD: '/candidate/dashboard',
    PROFILE: '/candidate/profile',
    APPLICATIONS: '/candidate/applications',
    SAVED_JOBS: '/candidate/saved-jobs',
    INTERVIEWS: '/candidate/interviews'
  },
  
  EMPLOYER: {
    DASHBOARD: '/employer/dashboard',
    PROFILE: '/employer/profile',
    JOBS: '/employer/jobs',
    CREATE_JOB: '/employer/jobs/create',
    EDIT_JOB: '/employer/jobs/:id/edit',
    APPLICATIONS: '/employer/applications',
    INTERVIEWS: '/employer/interviews',
    COMPANY: '/employer/company'
  },
  
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    JOBS: '/admin/jobs',
    COMPANIES: '/admin/companies',
    CATEGORIES: '/admin/categories',
    SKILLS: '/admin/skills',
    STATISTICS: '/admin/statistics'
  }
}

export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_TOO_SHORT: `Password must be at least ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters`,
  PASSWORD_TOO_WEAK: 'Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character',
  PASSWORD_NOT_MATCH: 'Passwords do not match',
  FILE_TOO_LARGE: 'File is too large. Maximum size is 5MB',
  INVALID_FILE_TYPE: 'File type is not supported',
  NETWORK_ERROR: 'Network connection error',
  UNAUTHORIZED: 'You are not authorized to access this resource',
  FORBIDDEN: 'Access denied',
  NOT_FOUND: 'Resource not found',
  SERVER_ERROR: 'Server error. Please try again later'
}

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully signed in',
  REGISTER_SUCCESS: 'Account created successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  PASSWORD_CHANGED: 'Password changed successfully',
  APPLICATION_SUBMITTED: 'Application submitted successfully',
  APPLICATION_WITHDRAWN: 'Application withdrawn successfully',
  JOB_CREATED: 'Job posting created successfully',
  JOB_UPDATED: 'Job posting updated successfully',
  JOB_DELETED: 'Job posting deleted successfully',
  FILE_UPLOADED: 'File uploaded successfully',
  INTERVIEW_SCHEDULED: 'Interview scheduled successfully',
  INTERVIEW_CANCELLED: 'Interview cancelled successfully'
}

export const DEFAULT_VALUES = {
  PAGINATION_SIZE: 10,
  DEBOUNCE_DELAY: 300,
  SALARY_CURRENCY: 'USD',
  DEFAULT_AVATAR: '/images/default-avatar.png',
  DEFAULT_COMPANY_LOGO: '/images/default-company-logo.png',
  DEFAULT_LOCATION: 'Remote'
}

export const FEATURES = {
  ENABLE_DARK_MODE: true,
  ENABLE_NOTIFICATIONS: true,
  ENABLE_REAL_TIME_CHAT: false,
  ENABLE_VIDEO_INTERVIEW: false,
  ENABLE_AI_MATCHING: false,
  ENABLE_SOCIAL_LOGIN: true
}

export const THEME_CONFIG = {
  DEFAULT_THEME: (import.meta.env.VITE_DEFAULT_THEME as 'light' | 'dark' | 'system') || 'system',
  STORAGE_KEY: import.meta.env.VITE_THEME_STORAGE_KEY || 'recruitment-portal-theme',
  ENABLE_SYSTEM_THEME: import.meta.env.VITE_ENABLE_SYSTEM_THEME === 'true'
}

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
}

// Job search filters
export const JOB_FILTERS = {
  SALARY_RANGES: [
    { label: 'Any', value: '' },
    { label: '$0 - $50k', value: '0-50000' },
    { label: '$50k - $100k', value: '50000-100000' },
    { label: '$100k - $150k', value: '100000-150000' },
    { label: '$150k+', value: '150000-999999' }
  ],
  LOCATIONS: [
    'Remote',
    'New York, NY',
    'San Francisco, CA',
    'Los Angeles, CA',
    'Chicago, IL',
    'Austin, TX',
    'Seattle, WA',
    'Boston, MA'
  ],
  COMPANY_TYPES: [
    'Startup',
    'Mid-size company',
    'Large corporation',
    'Non-profit',
    'Government',
    'Agency'
  ]
}

// Re-export enums for external use
export {
  JobType,
  ExperienceLevel,
  ApplicationStatus,
  UserRole,
  CompanySize,
  SalaryType,
  SkillLevel,
  InterviewType,
  Gender
} from './enums'
