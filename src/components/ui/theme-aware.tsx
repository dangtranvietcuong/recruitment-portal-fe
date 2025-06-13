import React from 'react'
import { useIsDarkMode } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

interface ThemeAwareImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  darkSrc?: string
  lightSrc?: string
  invertOnDark?: boolean
}

export function ThemeAwareImage({
  darkSrc,
  lightSrc,
  src,
  invertOnDark = false,
  className,
  ...props
}: ThemeAwareImageProps) {
  const isDark = useIsDarkMode()

  const getSrc = () => {
    if (isDark && darkSrc) return darkSrc
    if (!isDark && lightSrc) return lightSrc
    return src
  }

  return (
    <img
      {...props}
      src={getSrc()}
      className={cn(
        invertOnDark && 'dark:invert',
        className
      )}
    />
  )
}

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
}

export function GradientText({
  children,
  className,
  from = 'from-primary',
  to = 'to-primary/60'
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        from,
        to,
        className
      )}
    >
      {children}
    </span>
  )
}

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg',
        hover && 'transition-all duration-200 hover:bg-background/90 hover:border-border/80',
        className
      )}
    >
      {children}
    </div>
  )
}

interface StatusBadgeProps {
  status: 'success' | 'warning' | 'error' | 'info' | 'default'
  children: React.ReactNode
  className?: string
}

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const statusColors = {
    success: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        statusColors[status],
        className
      )}
    >
      {children}
    </span>
  )
}