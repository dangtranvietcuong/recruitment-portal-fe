import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { AppRoutes } from '@/routes/AppRoutes'

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}