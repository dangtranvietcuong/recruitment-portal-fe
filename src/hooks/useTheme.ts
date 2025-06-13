import { useEffect, useState } from 'react'
import { useTheme } from '@/components/theme-provider'

/**
 * Hook để detect theme hiện tại đang được sử dụng
 */
export function useCurrentTheme() {
  const { theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const updateTheme = () => {
      if (theme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setCurrentTheme(isDark ? 'dark' : 'light')
      } else {
        setCurrentTheme(theme)
      }
    }

    updateTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  return currentTheme
}

/**
 * Hook để detect nếu đang ở dark mode
 */
export function useIsDarkMode() {
  const currentTheme = useCurrentTheme()
  return currentTheme === 'dark'
}

/**
 * Hook để get theme-aware colors
 */
export function useThemeColors() {
  const isDark = useIsDarkMode()

  return {
    isDark,
    primary: isDark ? '#60a5fa' : '#3b82f6',
    secondary: isDark ? '#374151' : '#f3f4f6',
    background: isDark ? '#111827' : '#ffffff',
    foreground: isDark ? '#f9fafb' : '#111827',
    muted: isDark ? '#374151' : '#f3f4f6',
    mutedForeground: isDark ? '#9ca3af' : '#6b7280',
    border: isDark ? '#374151' : '#e5e7eb',
    success: isDark ? '#10b981' : '#059669',
    warning: isDark ? '#f59e0b' : '#d97706',
    error: isDark ? '#ef4444' : '#dc2626',
    info: isDark ? '#06b6d4' : '#0891b2'
  }
}