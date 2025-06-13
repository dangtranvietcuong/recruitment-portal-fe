import { apiClient } from '@/lib/api-client'
import type { ApiResponse } from '@/lib/api-client'
import { API_ENDPOINTS } from '@/constants'
import type { LoginRequest, LoginResponse, RegisterRequest, User } from '@/types'

export class AuthService {
  /**
   * Đăng nhập
   */
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      )
      
      if (response.success && response.data) {
        // Lưu tokens
        localStorage.setItem('access_token', response.data.accessToken)
        localStorage.setItem('refresh_token', response.data.refreshToken)
        localStorage.setItem('user_data', JSON.stringify(response.data.user))
        
        return response.data
      }
      
      throw new Error(response.message || 'Đăng nhập thất bại')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }
  
  /**
   * Đăng ký
   */
  async register(userData: RegisterRequest): Promise<ApiResponse<User>> {
    try {
      const response = await apiClient.post<User>(
        API_ENDPOINTS.AUTH.REGISTER,
        userData
      )
      
      return response
    } catch (error) {
      console.error('Register error:', error)
      throw error
    }
  }
  
  /**
   * Đăng xuất
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Xóa tokens dù có lỗi hay không
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('user_data')
    }
  }
  
  /**
   * Làm mới token
   */
  async refreshToken(): Promise<LoginResponse> {
    try {
      const refreshToken = localStorage.getItem('refresh_token')
      
      if (!refreshToken) {
        throw new Error('No refresh token available')
      }
      
      const response = await apiClient.post<LoginResponse>(
        API_ENDPOINTS.AUTH.REFRESH,
        { refresh_token: refreshToken }
      )
      
      if (response.success && response.data) {
        localStorage.setItem('access_token', response.data.accessToken)
        localStorage.setItem('refresh_token', response.data.refreshToken)
        
        return response.data
      }
      
      throw new Error('Token refresh failed')
    } catch (error) {
      console.error('Refresh token error:', error)
      throw error
    }
  }
  
  /**
   * Quên mật khẩu
   */
  async forgotPassword(email: string): Promise<ApiResponse<void>> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
        { email }
      )
      
      return response
    } catch (error) {
      console.error('Forgot password error:', error)
      throw error
    }
  }
  
  /**
   * Đặt lại mật khẩu
   */
  async resetPassword(token: string, newPassword: string): Promise<ApiResponse<void>> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.RESET_PASSWORD,
        { token, password: newPassword }
      )
      
      return response
    } catch (error) {
      console.error('Reset password error:', error)
      throw error
    }
  }
  
  /**
   * Xác thực email
   */
  async verifyEmail(token: string): Promise<ApiResponse<void>> {
    try {
      const response = await apiClient.post<void>(
        API_ENDPOINTS.AUTH.VERIFY_EMAIL,
        { token }
      )
      
      return response
    } catch (error) {
      console.error('Verify email error:', error)
      throw error
    }
  }
  
  /**
   * Kiểm tra trạng thái đăng nhập
   */
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token')
    return !!token
  }
  
  /**
   * Lấy thông tin user hiện tại
   */
  getCurrentUser(): User | null {
    const userData = localStorage.getItem('user_data')
    return userData ? JSON.parse(userData) : null
  }
  
  /**
   * Lấy access token
   */
  getAccessToken(): string | null {
    return localStorage.getItem('access_token')
  }
  
  /**
   * Kiểm tra quyền
   */
  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser()
    if (!user || !user.roles) return false
    
    return user.roles.some(role => 
      role.permissions.some(p => p.name === permission)
    )
  }
  
  /**
   * Kiểm tra vai trò
   */
  hasRole(roleName: string): boolean {
    const user = this.getCurrentUser()
    if (!user || !user.roles) return false
    
    return user.roles.some(role => role.name === roleName)
  }
}

export const authService = new AuthService()