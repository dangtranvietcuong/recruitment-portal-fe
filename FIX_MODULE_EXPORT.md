# 🔧 Fix Module Export Error

## 🚨 Lỗi hiện tại:
```
The requested module '/src/types/index.ts' does not provide an export named 'User'
```

## ✅ Các bước fix:

### 1. Clear Development Cache
```bash
# Stop dev server (Ctrl+C)

# Clear all caches
rm -rf node_modules/.vite
rm -rf node_modules/.cache
rm -rf dist
rm -rf .vite

# Restart dev server
npm run dev
```

### 2. Alternative: Explicit Imports
Nếu vẫn lỗi, thay đổi import statements:

```typescript
// Thay vì:
import { User, UserRole } from '@/types'

// Sử dụng:
import type { User, UserRole } from '@/types'
// hoặc
import { type User, type UserRole } from '@/types'
```

### 3. Temporary Fix: Direct Path Import
```typescript
// In authStore.ts, thay đổi import:
import type { User, UserRole } from '../types/index'
```

### 4. Check TypeScript Path Resolution
Verify tsconfig.app.json has correct path mapping:
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## 🎯 Root Cause:
- Vite hot reload cache issue
- TypeScript module resolution problems
- Path alias không được resolve đúng

## 🚀 Quick Fix Command:
```bash
rm -rf .vite node_modules/.vite && npm run dev
```

Thử clear cache trước, nếu không work thì sẽ fix import paths! 🔄