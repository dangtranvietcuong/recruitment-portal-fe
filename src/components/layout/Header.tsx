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
  Briefcase,
  ChevronDown,
  Building2,
  Users,
  X
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Header() {
  const location = useLocation()
  const { user, isAuthenticated, clearAuth } = useAuthStore()
  const { isMobileMenuOpen, toggleMobileMenu, unreadCount } = useUIStore()
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)

  const handleLogout = () => {
    clearAuth()
    setIsUserMenuOpen(false)
  }

  const isActiveRoute = (path: string) => {
    return location.pathname === path
  }

  const navigation = [
    { name: 'Find Jobs', href: ROUTES.JOBS, icon: Briefcase },  
    { name: 'Companies', href: ROUTES.COMPANIES, icon: Building2 },
    { name: 'Candidates', href: ROUTES.CANDIDATES, icon: Users, authRequired: true },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link 
                to={ROUTES.HOME} 
                className="flex items-center space-x-2 group transition-all duration-200"
              >
                <div className="relative">
                  <Briefcase className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  RecruitPortal
                </span>
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                if (item.authRequired && !isAuthenticated) return null
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground ${
                      isActiveRoute(item.href)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Search - Desktop */}
              <div className="hidden lg:flex">
                <Button variant="outline" size="sm" className="btn-shine">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {isAuthenticated ? (
                <>
                  {/* Notifications */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="relative hover:bg-accent transition-colors duration-200"
                  >
                    <Bell className="h-4 w-4" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-xs text-destructive-foreground flex items-center justify-center animate-pulse">
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </span>
                    )}
                  </Button>

                  {/* User Menu */}
                  <div className="relative">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="space-x-2 hover:bg-accent transition-colors duration-200"
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    >
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span className="hidden lg:inline max-w-24 truncate">
                        {user?.email?.split('@')[0]}
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                    </Button>
                    
                    {/* Dropdown Menu */}
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-popover border border-border rounded-lg shadow-strong py-1 z-50 animate-in slide-in-from-top-2">
                        <div className="px-3 py-2 border-b border-border">
                          <p className="text-sm font-medium">{user?.email}</p>
                          <p className="text-xs text-muted-foreground capitalize">
                            {user?.roles?.[0]?.name?.toLowerCase().replace('_', ' ')}
                          </p>
                        </div>
                        
                        <Link
                          to={getDashboardRoute(user)}
                          className="flex items-center space-x-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Briefcase className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                        
                        <Link
                          to="/profile"
                          className="flex items-center space-x-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Settings className="h-4 w-4" />
                          <span>Profile Settings</span>
                        </Link>
                        
                        <hr className="my-1 border-border" />
                        
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-left hover:bg-destructive/10 hover:text-destructive transition-colors duration-200"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={ROUTES.LOGIN}>Sign In</Link>
                  </Button>
                  <Button size="sm" className="btn-shine" asChild>
                    <Link to={ROUTES.REGISTER}>Get Started</Link>
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover:bg-accent transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-1">
              {navigation.map((item) => {
                if (item.authRequired && !isAuthenticated) return null
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActiveRoute(item.href)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Search */}
            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Search className="h-4 w-4 mr-3" />
                Search Jobs
              </Button>
            </div>

            {/* Mobile Auth Actions */}
            {!isAuthenticated && (
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to={ROUTES.LOGIN} onClick={toggleMobileMenu}>
                    Sign In
                  </Link>
                </Button>
                <Button className="w-full" size="lg" asChild>
                  <Link to={ROUTES.REGISTER} onClick={toggleMobileMenu}>
                    Get Started
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay for user menu */}
      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </>
  )
}

function getDashboardRoute(user: any) {
  if (!user || !user.roles || user.roles.length === 0) return ROUTES.HOME
  
  const primaryRole = user.roles[0].name
  
  switch (primaryRole) {
    case 'CANDIDATE':
      return ROUTES.CANDIDATE?.DASHBOARD || '/'
    case 'EMPLOYER':
    case 'HR_MANAGER':
    case 'RECRUITER':
      return ROUTES.EMPLOYER?.DASHBOARD || '/'
    case 'ADMIN':
    case 'SUPER_ADMIN':
      return ROUTES.ADMIN?.DASHBOARD || '/'
    default:
      return ROUTES.HOME
  }
}
