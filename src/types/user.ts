// User-related types
import type { BaseEntity } from './common'

export interface User extends BaseEntity {
  email: string
  isActive: boolean
  emailVerified: boolean
  lastLoginAt?: string
  roles: Role[]
}

export interface Role {
  id: number
  name: string
  displayName: string
  description?: string
  permissions: Permission[]
}

export interface Permission {
  id: number
  name: string
  displayName: string
  module: string
  action: string
  resource?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  user: User
  expiresIn: number
}

export interface RegisterRequest {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  role: string
  companyName?: string
}