# Cài đặt các dependencies chính
npm install axios react-router-dom @tanstack/react-query zustand

# Cài đặt react-hook-form cho form handling
npm install react-hook-form @hookform/resolvers zod

# Cài đặt Tailwind CSS và Shadcn/UI
npm install -D tailwindcss postcss autoprefixer
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react

# Cài đặt Shadcn/UI components (cần chạy từng lệnh)
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add card
npx shadcn@latest add alert
npx shadcn@latest add dropdown-menu
npx shadcn@latest add dialog
npx shadcn@latest add table
npx shadcn@latest add select
npx shadcn@latest add textarea
npx shadcn@latest add toast

# Cài đặt date utilities
npm install date-fns

# Cài đặt development dependencies
npm install -D @types/node