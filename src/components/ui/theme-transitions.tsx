import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ThemeTransitionProps {
  children: React.ReactNode
  className?: string
}

export function ThemeTransition({ children, className }: ThemeTransitionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Delay to prevent flash of unstyled content
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        'transition-all duration-300 ease-in-out',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  )
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        'transition-all duration-500 ease-out',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4',
        className
      )}
    >
      {children}
    </div>
  )
}

// Smooth color transition for theme changes
export function useThemeTransition() {
  useEffect(() => {
    const root = document.documentElement
    
    // Add transition class to html element
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease'
    
    return () => {
      root.style.transition = ''
    }
  }, [])
}