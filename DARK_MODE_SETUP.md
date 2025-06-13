# 🌓 Dark Mode Setup Guide

## 📋 Tổng quan Dark Mode đã implement

### ✅ **Các tính năng đã hoàn thành:**

1. **🎨 Theme Provider System**
   - Context-based theme management
   - Support cho 3 modes: light, dark, system
   - Persistent storage với localStorage
   - Automatic system preference detection

2. **🎯 Theme Toggle Components**
   - Dropdown theme selector
   - Simple toggle button
   - Animated icons với smooth transitions

3. **🎨 TailwindCSS Configuration**
   - Dark mode class strategy
   - CSS variables cho consistent theming
   - Custom animations và transitions
   - Comprehensive color palette

4. **🔧 Custom Hooks**
   - `useCurrentTheme()` - Detect active theme
   - `useIsDarkMode()` - Boolean dark mode check
   - `useThemeColors()` - Theme-aware color values

5. **🎭 Theme-aware Components**
   - `ThemeAwareImage` - Conditional images
   - `GradientText` - Gradient text với dark mode
   - `GlassCard` - Glass morphism effect
   - `StatusBadge` - Theme-aware status badges

6. **⚡ Animations & Transitions**
   - Smooth theme switching
   - Fade in animations
   - Theme transition components
   - Prevent flash of unstyled content

## 🚀 Cài đặt Dependencies

```bash
# Core dependencies for dark mode
npm install tailwindcss-animate
npm install @tailwindcss/typography  # Optional for better text styling

# Install Shadcn/UI components for theme toggle
npx shadcn@latest add dropdown-menu
npx shadcn@latest add button
```

## 📝 Cấu hình files

### 1. **Environment Variables**
Tạo file `.env.local`:
```bash
VITE_DEFAULT_THEME=system
VITE_ENABLE_SYSTEM_THEME=true
VITE_THEME_STORAGE_KEY=recruitment-portal-theme
```

### 2. **TailwindCSS Integration**
Đảm bảo `tailwind.config.js` có cấu hình dark mode:
```js
module.exports = {
  darkMode: ["class"],
  // ... rest of config
}
```

### 3. **Main.tsx Setup**
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## 💡 Cách sử dụng

### **1. Basic Theme Toggle**
```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle'

function Header() {
  return (
    <header>
      {/* Other header content */}
      <ThemeToggle />
    </header>
  )
}
```

### **2. Theme-aware Styling**
```tsx
// Using CSS classes
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>

// Using hooks
import { useIsDarkMode } from '@/hooks/useTheme'

function MyComponent() {
  const isDark = useIsDarkMode()
  
  return (
    <div style={{ 
      backgroundColor: isDark ? '#1f2937' : '#ffffff',
      color: isDark ? '#ffffff' : '#1f2937'
    }}>
      Content
    </div>
  )
}
```

### **3. Theme-aware Components**
```tsx
import { ThemeAwareImage, StatusBadge } from '@/components/ui/theme-aware'

function Example() {
  return (
    <>
      <ThemeAwareImage
        src="/logo.png"
        darkSrc="/logo-dark.png"
        alt="Logo"
      />
      
      <StatusBadge status="success">
        Active
      </StatusBadge>
    </>
  )
}
```

### **4. Conditional Rendering**
```tsx
import { useCurrentTheme } from '@/hooks/useTheme'

function MyComponent() {
  const currentTheme = useCurrentTheme()
  
  return (
    <div>
      {currentTheme === 'dark' ? (
        <DarkModeComponent />
      ) : (
        <LightModeComponent />
      )}
    </div>
  )
}
```

## 🎨 Dark Mode Design Patterns

### **1. Color Consistency**
```css
/* Sử dụng CSS variables */
.card {
  @apply bg-card text-card-foreground border-border;
}

/* Hoặc Tailwind classes */
.card {
  @apply bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100;
}
```

### **2. Gradient Backgrounds**
```tsx
<div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700">
  Gradient background
</div>
```

### **3. Images & Icons**
```tsx
// Auto-invert images in dark mode
<img className="dark:invert" src="/icon.svg" alt="Icon" />

// Conditional images
<ThemeAwareImage
  lightSrc="/hero-light.jpg"
  darkSrc="/hero-dark.jpg"
  alt="Hero"
/>
```

### **4. Form Elements**
```tsx
<input className="
  bg-white dark:bg-gray-800 
  border-gray-300 dark:border-gray-600 
  text-gray-900 dark:text-gray-100
  focus:ring-blue-500 dark:focus:ring-blue-400
" />
```

## 🐛 Troubleshooting

### **1. Flash of Unstyled Content**
```tsx
// Sử dụng ThemeTransition component
import { ThemeTransition } from '@/components/ui/theme-transitions'

function App() {
  return (
    <ThemeTransition>
      <YourContent />
    </ThemeTransition>
  )
}
```

### **2. Theme không persist**
Kiểm tra localStorage key trong `ThemeProvider`:
```tsx
<ThemeProvider storageKey="recruitment-portal-theme">
```

### **3. System theme không hoạt動**
Đảm bảo CSS media query:
```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}
```

## 🎯 Best Practices

1. **Consistent Color Palette**: Sử dụng CSS variables thay vì hardcode colors
2. **Accessibility**: Đảm bảo contrast ratio đủ cao
3. **Performance**: Avoid re-renders khi theme thay đổi
4. **Testing**: Test cả light và dark mode
5. **Images**: Cung cấp dark mode variants cho images

## 📱 Mobile Considerations

```tsx
// Responsive theme toggle
<div className="flex items-center">
  <span className="hidden sm:inline mr-2">Theme:</span>
  <ThemeToggle />
</div>
```

## 🔮 Advanced Features

### **1. Theme-based Animations**
```css
.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### **2. Dynamic Favicon**
```tsx
useEffect(() => {
  const favicon = document.querySelector('link[rel="icon"]')
  if (favicon) {
    favicon.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico'
  }
}, [isDark])
```

### **3. Theme-aware Charts**
```tsx
const chartColors = useThemeColors()

<Chart
  data={data}
  colors={{
    primary: chartColors.primary,
    secondary: chartColors.secondary
  }}
/>
```

Dark Mode implementation đã hoàn thành! 🎉 Bạn có thể customize thêm theo design system của dự án.