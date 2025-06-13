import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages'
import { LoginPage } from '@/pages/auth'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Thêm routes khác ở đây */}
    </Routes>
  )
}