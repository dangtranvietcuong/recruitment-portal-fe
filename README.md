# 📁 Cấu trúc Frontend - Recruitment Portal

## 🏗️ Tổng quan kiến trúc
```
fe/src/
├── 📂 components/              # React Components
│   ├── 📂 ui/                  # Shadcn/UI Components
│   ├── 📂 common/              # Shared Components
│   ├── 📂 layout/              # Layout Components
│   └── index.ts                # Export tất cả components
├── 📂 pages/                   # Page Components
│   ├── 📂 auth/                # Authentication pages
│   ├── 📂 candidate/           # Candidate pages
│   ├── 📂 employer/            # Employer pages
│   ├── 📂 admin/               # Admin pages
│   ├── HomePage.tsx            # Landing page
│   └── index.ts                # Export tất cả pages
├── 📂 services/                # API Services
│   ├── auth.service.ts         # Authentication API
│   ├── job.service.ts          # Job API
│   ├── application.service.ts  # Application API
│   └── index.ts                # Export tất cả services
├── 📂 hooks/                   # Custom React Hooks
│   ├── useAuth.ts              # Authentication hook
│   ├── useJobs.ts              # Jobs hook
│   ├── useApplications.ts      # Applications hook
│   ├── useApi.ts               # API hook utilities
│   └── index.ts                # Export tất cả hooks
├── 📂 store/                   # Zustand Store
│   ├── authStore.ts            # Authentication state
│   ├── jobStore.ts             # Jobs state
│   ├── uiStore.ts              # UI state
│   └── index.ts                # Export tất cả stores
├── 📂 types/                   # TypeScript Types
│   └── index.ts                # Tất cả type definitions
├── 📂 lib/                     # Utility Libraries
│   ├── utils.ts                # Utility functions
│   └── api-client.ts           # Axios configuration
├── 📂 constants/               # Constants & Configurations
│   └── index.ts                # API endpoints, labels, etc.
├── 📂 utils/                   # Helper Functions
│   ├── formatters.ts           # Date, currency formatters
│   ├── validators.ts           # Form validators
│   └── helpers.ts              # General helpers
├── 📂 assets/                  # Static Assets
│   ├── 📂 images/              # Images, icons
│   └── 📂 styles/              # Global styles
├── App.tsx                     # Main App component
├── main.tsx                    # App entry point
└── vite-env.d.ts              # Vite types
```

## 🎯 Các tính năng đã implement

### ✅ **Cấu hình cơ bản**
- TypeScript configuration với path aliases
- Vite configuration cho development
- Environment variables setup
- Package structure cho scalability

### ✅ **Type Safety**
- Comprehensive TypeScript interfaces
- API response types
- Form validation types
- Store state types

### ✅ **API Integration**
- Axios client với interceptors
- JWT token handling
- Error handling và retry logic
- File upload support

### ✅ **State Management**
- Zustand stores cho auth, jobs, UI
- Persistent storage cho auth
- Optimized state updates

### ✅ **Custom Hooks**
- useAuth cho authentication
- useJobs cho job management
- useApplications cho application flow
- useApi cho generic API calls

### ✅ **Components Architecture**
- Layout components (Header, Footer)
- Common components (Loading, Error, Pagination)
- Shadcn/UI integration ready
- Responsive design ready

### ✅ **Services Layer**
- Authentication service
- Job service với search/filter
- Application service
- Centralized error handling

## 🚀 Bước tiếp theo để hoàn thiện

### 1. **Cài đặt Dependencies**
```bash
# Chạy các lệnh trong SETUP_DEPENDENCIES.md
npm install axios react-router-dom zustand
npm install react-hook-form @hookform/resolvers zod
npm install -D tailwindcss postcss autoprefixer
# ... và các package khác
```

### 2. **Setup Shadcn/UI**
```bash
npx shadcn@latest init
npx shadcn@latest add button input label card alert
# ... các components khác
```

### 3. **Tạo thêm Pages**
- RegisterPage, ForgotPasswordPage
- CandidateDashboard, JobListPage
- EmployerDashboard, CreateJobPage
- AdminDashboard

### 4. **Setup Routing**
- React Router configuration
- Protected routes
- Route guards based on roles

### 5. **Form Validation**
- Zod schemas cho validation
- React Hook Form integration
- Custom validation rules

### 6. **Real-time Features** (optional)
- Socket.io cho notifications
- Live updates cho job status
- Chat system

## 📋 Code Quality Standards

### **TypeScript**
- Strict mode enabled
- Proper typing cho tất cả functions
- Interface thay vì type khi có thể
- Avoid `any` type

### **React Best Practices**
- Functional components với hooks
- Custom hooks cho business logic
- Memoization khi cần thiết
- Proper cleanup trong useEffect

### **API Integration**
- Tất cả API calls qua services
- Async/await thay vì callbacks
- Proper error handling
- Loading states cho UX

### **Styling**
- Tailwind CSS utility classes
- Shadcn/UI components
- Responsive design mobile-first
- Dark mode support ready

## 🔧 Development Workflow

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Type checking**
   ```bash
   npm run type-check
   ```

4. **Linting**
   ```bash
   npm run lint
   ```

## 📝 Naming Conventions

- **Files**: PascalCase cho components, camelCase cho utils
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces**: PascalCase với descriptive names
- **API endpoints**: RESTful conventions

Cấu trúc này cung cấp foundation mạnh mẽ cho việc phát triển ứng dụng Recruitment Portal với khả năng mở rộng cao và maintainability tốt! 🎉