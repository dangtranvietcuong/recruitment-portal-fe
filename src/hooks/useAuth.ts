import { useState, useEffect } from 'react'
import type { User, LoginRequest, RegisterRequest, LoginResponse } from '@/types'
import { authService } from '@/services/auth.service'

interface UseAuthReturn {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginRequest) => Promise<LoginResponse>
  register: (userData: RegisterRequest) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<LoginResponse>
  hasPermission: (permission: string) => boolean
  hasRole: (role: string) => boolean
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Khởi tạo auth state từ localStorage
    const initAuth = () => {
      try {
        const currentUser = authService.getCurrentUser()
        setUser(currentUser)
      } catch (error) {
        console.error('Error initializing auth:', error)
      } finally {
        setLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
      setLoading(true)
      const response = await authService.login(credentials)
      setUser(response.user)
      return response
    // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: RegisterRequest): Promise<void> => {
    try {
      setLoading(true)
      await authService.register(userData)
    // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    try {
      setLoading(true)
      await authService.logout()
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      // Vẫn clear user state dù có lỗi
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const refreshToken = async (): Promise<LoginResponse> => {
    try {
      const response = await authService.refreshToken()
      setUser(response.user)
      return response
    } catch (error) {
      // Nếu refresh token thất bại, logout user
      setUser(null)
      throw error
    }
  }

  const hasPermission = (permission: string): boolean => {
    return authService.hasPermission(permission)
  }

  const hasRole = (role: string): boolean => {
    return authService.hasRole(role)
  }

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    refreshToken,
    hasPermission,
    hasRole
  }
}