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
  [JobType.FULL_TIME]: 'Toàn thời gian',
  [JobType.PART_TIME]: 'Bán thời gian',
  [JobType.CONTRACT]: 'Hợp đồng',
  [JobType.INTERNSHIP]: 'Thực tập',
  [JobType.FREELANCE]: 'Freelance'
} as const

export const EXPERIENCE_LEVEL_LABELS = {
  [ExperienceLevel.ENTRY]: 'Mới ra trường',
  [ExperienceLevel.MID]: 'Trung cấp (2-5 năm)',
  [ExperienceLevel.SENIOR]: 'Cao cấp (5+ năm)',
  [ExperienceLevel.LEAD]: 'Trưởng nhóm',
  [ExperienceLevel.EXECUTIVE]: 'Điều hành'
} as const

export const APPLICATION_STATUS_LABELS = {
  [ApplicationStatus.PENDING]: 'Chờ xử lý',
  [ApplicationStatus.REVIEWING]: 'Đang xem xét',
  [ApplicationStatus.SHORTLISTED]: 'Được chọn',
  [ApplicationStatus.INTERVIEW_SCHEDULED]: 'Lịch phỏng vấn',
  [ApplicationStatus.INTERVIEWED]: 'Đã phỏng vấn',
  [ApplicationStatus.OFFERED]: 'Được tuyển',
  [ApplicationStatus.ACCEPTED]: 'Chấp nhận',
  [ApplicationStatus.REJECTED]: 'Từ chối',
  [ApplicationStatus.WITHDRAWN]: 'Đã rút'
} as const

export const USER_ROLE_LABELS = {
  [UserRole.SUPER_ADMIN]: 'Super Admin',
  [UserRole.ADMIN]: 'Quản trị viên',
  [UserRole.EMPLOYER]: 'Nhà tuyển dụng',
  [UserRole.CANDIDATE]: 'Ứng viên',
  [UserRole.HR_MANAGER]: 'Quản lý HR',
  [UserRole.RECRUITER]: 'Chuyên viên tuyển dụng'
} as const

export const COMPANY_SIZE_LABELS = {
  [CompanySize.STARTUP]: '1-10 nhân viên',
  [CompanySize.SMALL]: '11-50 nhân viên',
  [CompanySize.MEDIUM]: '51-200 nhân viên',
  [CompanySize.LARGE]: '201-500 nhân viên',
  [CompanySize.ENTERPRISE]: '500+ nhân viên'
} as const

export const SALARY_TYPE_LABELS = {
  [SalaryType.HOURLY]: 'Theo giờ',
  [SalaryType.MONTHLY]: 'Theo tháng',
  [SalaryType.YEARLY]: 'Theo năm'
} as const

export const SKILL_LEVEL_LABELS = {
  [SkillLevel.BASIC]: 'Cơ bản',
  [SkillLevel.INTERMEDIATE]: 'Trung cấp',
  [SkillLevel.ADVANCED]: 'Cao cấp',
  [SkillLevel.EXPERT]: 'Chuyên gia'
} as const

export const INTERVIEW_TYPE_LABELS = {
  [InterviewType.PHONE]: 'Điện thoại',
  [InterviewType.VIDEO]: 'Video call',
  [InterviewType.IN_PERSON]: 'Trực tiếp',
  [InterviewType.ONLINE_TEST]: 'Test online'
} as const

export const GENDER_LABELS = {
  [Gender.MALE]: 'Nam',
  [Gender.FEMALE]: 'Nữ',
  [Gender.OTHER]: 'Khác'
} as const

// Color mappings for status
export const APPLICATION_STATUS_COLORS = {
  [ApplicationStatus.PENDING]: 'bg-yellow-100 text-yellow-800',
  [ApplicationStatus.REVIEWING]: 'bg-blue-100 text-blue-800',
  [ApplicationStatus.SHORTLISTED]: 'bg-purple-100 text-purple-800',
  [ApplicationStatus.INTERVIEW_SCHEDULED]: 'bg-indigo-100 text-indigo-800',
  [ApplicationStatus.INTERVIEWED]: 'bg-cyan-100 text-cyan-800',
  [ApplicationStatus.OFFERED]: 'bg-green-100 text-green-800',
  [ApplicationStatus.ACCEPTED]: 'bg-emerald-100 text-emerald-800',
  [ApplicationStatus.REJECTED]: 'bg-red-100 text-red-800',
  [ApplicationStatus.WITHDRAWN]: 'bg-gray-100 text-gray-800'
} as const

// Rest of constants remain the same...
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
  REQUIRED_FIELD: 'Trường này là bắt buộc',
  INVALID_EMAIL: 'Email không hợp lệ',
  INVALID_PHONE: 'Số điện thoại không hợp lệ',
  PASSWORD_TOO_SHORT: `Mật khẩu phải có ít nhất ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} ký tự`,
  PASSWORD_TOO_WEAK: 'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
  PASSWORD_NOT_MATCH: 'Mật khẩu xác nhận không khớp',
  FILE_TOO_LARGE: 'File quá lớn. Kích thước tối đa 5MB',
  INVALID_FILE_TYPE: 'Loại file không được hỗ trợ',
  NETWORK_ERROR: 'Lỗi kết nối mạng',
  UNAUTHORIZED: 'Bạn không có quyền truy cập',
  FORBIDDEN: 'Truy cập bị từ chối',
  NOT_FOUND: 'Không tìm thấy dữ liệu',
  SERVER_ERROR: 'Lỗi server. Vui lòng thử lại sau'
}

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Đăng nhập thành công',
  REGISTER_SUCCESS: 'Đăng ký thành công',
  PROFILE_UPDATED: 'Cập nhật hồ sơ thành công',
  PASSWORD_CHANGED: 'Đổi mật khẩu thành công',
  APPLICATION_SUBMITTED: 'Nộp đơn ứng tuyển thành công',
  APPLICATION_WITHDRAWN: 'Rút đơn ứng tuyển thành công',
  JOB_CREATED: 'Tạo tin tuyển dụng thành công',
  JOB_UPDATED: 'Cập nhật tin tuyển dụng thành công',
  JOB_DELETED: 'Xóa tin tuyển dụng thành công',
  FILE_UPLOADED: 'Tải file lên thành công',
  INTERVIEW_SCHEDULED: 'Lên lịch phỏng vấn thành công',
  INTERVIEW_CANCELLED: 'Hủy lịch phỏng vấn thành công'
}

export const DEFAULT_VALUES = {
  PAGINATION_SIZE: 10,
  DEBOUNCE_DELAY: 300,
  SALARY_CURRENCY: 'VND',
  DEFAULT_AVATAR: '/images/default-avatar.png',
  DEFAULT_COMPANY_LOGO: '/images/default-company-logo.png',
  DEFAULT_LOCATION: 'Hà Nội, Việt Nam'
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