import React from 'react'
import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ErrorMessageProps {
  message: string
  type?: 'error' | 'warning' | 'info' | 'success'
  className?: string
  onRetry?: () => void
}

export function ErrorMessage({ 
  message, 
  type = 'error', 
  className,
  onRetry 
}: ErrorMessageProps) {
  const icons = {
    error: XCircle,
    warning: AlertCircle,
    info: Info,
    success: CheckCircle
  }

  const colors = {
    error: 'text-red-600 bg-red-50 border-red-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    info: 'text-blue-600 bg-blue-50 border-blue-200',
    success: 'text-green-600 bg-green-50 border-green-200'
  }

  const Icon = icons[type]

  return (
    <div className={cn(
      'rounded-md border p-4',
      colors[type],
      className
    )}>
      <div className="flex items-start">
        <Icon className="h-5 w-5 flex-shrink-0" />
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 text-sm underline hover:no-underline"
            >
              Thử lại
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

interface EmptyStateProps {
  title: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className
}: EmptyStateProps) {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center p-8 text-center',
      className
    )}>
      {icon && (
        <div className="mb-4 text-muted-foreground">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground max-w-md">
          {description}
        </p>
      )}
      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  )
}