import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthStore, useUIStore } from '@/store'
import { ROUTES } from '@/constants'
import { Button } from '@/components/ui/button'
import { 
  Bell, 
  Search, 
  User, 
  Menu,
  LogOut,
  Settings,
  Briefcase
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Header() {
  const location = useLocation()
  const { user, isAuthenticated, clearAuth } = useAuthStore()
  const { toggleMobileMenu, unreadCount } = useUIStore()

  const handleLogout = () => {
    clearAuth()
  }

  const isActiveRoute = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to={ROUTES.HOME} className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">RecruitPortal</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to={ROUTES.JOBS}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveRoute(ROUTES.JOBS)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              Tìm việc làm
            </Link>
            <Link
              to={ROUTES.COMPANIES}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveRoute(ROUTES.COMPANIES)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              Công ty
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden md:flex">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Tìm kiếm
              </Button>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </Button>

                {/* User Menu */}
                <div className="relative group">
                  <Button variant="ghost" size="sm" className="space-x-2">
                    <User className="h-4 w-4" />
                    <span className="hidden md:inline">
                      {user?.email}
                    </span>
                  </Button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <Link
                      to={getDashboardRoute(user)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="h-4 w-4 inline mr-2" />
                      Hồ sơ
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 inline mr-2" />
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to={ROUTES.LOGIN}>Đăng nhập</Link>
                </Button>
                <Button asChild>
                  <Link to={ROUTES.REGISTER}>Đăng ký</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function getDashboardRoute(user: any) {
  if (!user || !user.roles || user.roles.length === 0) return ROUTES.HOME
  
  const primaryRole = user.roles[0].name
  
  switch (primaryRole) {
    case 'CANDIDATE':
      return ROUTES.CANDIDATE.DASHBOARD
    case 'EMPLOYER':
    case 'HR_MANAGER':
    case 'RECRUITER':
      return ROUTES.EMPLOYER.DASHBOARD
    case 'ADMIN':
    case 'SUPER_ADMIN':
      return ROUTES.ADMIN.DASHBOARD
    default:
      return ROUTES.HOME
  }
}