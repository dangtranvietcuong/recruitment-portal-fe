import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types/user'
import type { UserRole } from '@/types'

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  loading: boolean
}

interface AuthActions {
  setUser: (user: User | null) => void
  setTokens: (accessToken: string, refreshToken: string) => void
  clearAuth: () => void
  setLoading: (loading: boolean) => void
  hasRole: (role: UserRole) => boolean
  hasPermission: (permission: string) => boolean
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // State
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      loading: false,

      // Actions
      setUser: (user) => 
        set((state) => ({
          user,
          isAuthenticated: !!user
        })),

      setTokens: (accessToken, refreshToken) =>
        set((state) => ({
          accessToken,
          refreshToken,
          isAuthenticated: true
        })),

      clearAuth: () =>
        set((state) => ({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          loading: false
        })),

      setLoading: (loading) =>
        set((state) => ({ loading })),

      hasRole: (role) => {
        const { user } = get()
        if (!user || !user.roles) return false
        return user.roles.some(r => r.name === role)
      },

      hasPermission: (permission) => {
        const { user } = get()
        if (!user || !user.roles) return false
        
        return user.roles.some(role =>
          role.permissions.some(p => p.name === permission)
        )
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)