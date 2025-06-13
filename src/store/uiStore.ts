import { create } from 'zustand'

interface UIState {
  sidebarOpen: boolean
  mobileMenuOpen: boolean
  notifications: Notification[]
  unreadCount: number
  searchHistory: string[]
}

interface Notification {
  id: number
  title: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  isRead: boolean
  createdAt: string
}

interface UIActions {
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  setMobileMenuOpen: (open: boolean) => void
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void
  markNotificationAsRead: (id: number) => void
  markAllNotificationsAsRead: () => void
  removeNotification: (id: number) => void
  clearNotifications: () => void
  addToSearchHistory: (query: string) => void
  clearSearchHistory: () => void
}

type UIStore = UIState & UIActions

export const useUIStore = create<UIStore>((set, get) => ({
  // State
  sidebarOpen: true,
  mobileMenuOpen: false,
  notifications: [],
  unreadCount: 0,
  searchHistory: [],

  // Actions
  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setSidebarOpen: (open) =>
    set((state) => ({ sidebarOpen: open })),

  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  setMobileMenuOpen: (open) =>
    set((state) => ({ mobileMenuOpen: open })),

  addNotification: (notification) =>
    set((state) => {
      const newNotification: Notification = {
        ...notification,
        id: Date.now(),
        createdAt: new Date().toISOString()
      }
      
      return {
        notifications: [newNotification, ...state.notifications],
        unreadCount: state.unreadCount + 1
      }
    }),

  markNotificationAsRead: (id) =>
    set((state) => {
      const notifications = state.notifications.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
      
      const unreadCount = notifications.filter(n => !n.isRead).length
      
      return { notifications, unreadCount }
    }),

  markAllNotificationsAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map(notification => ({
        ...notification,
        isRead: true
      })),
      unreadCount: 0
    })),

  removeNotification: (id) =>
    set((state) => {
      const notifications = state.notifications.filter(n => n.id !== id)
      const unreadCount = notifications.filter(n => !n.isRead).length
      
      return { notifications, unreadCount }
    }),

  clearNotifications: () =>
    set((state) => ({
      notifications: [],
      unreadCount: 0
    })),

  addToSearchHistory: (query) =>
    set((state) => {
      const trimmedQuery = query.trim().toLowerCase()
      if (!trimmedQuery || state.searchHistory.includes(trimmedQuery)) {
        return state
      }
      
      // Keep only last 10 searches
      const newHistory = [trimmedQuery, ...state.searchHistory].slice(0, 10)
      
      return { searchHistory: newHistory }
    }),

  clearSearchHistory: () =>
    set((state) => ({ searchHistory: [] }))
}))