// 🆘 Emergency fallback - Direct imports if barrel exports fail
// Use this approach if @/types imports still don't work

// In any file that imports from @/types, replace with direct imports:

// Instead of: import type { Job } from '@/types'
// Use: import type { Job } from '../types/job'

// Instead of: import type { User } from '@/types' 
// Use: import type { User } from '../types/user'

// Instead of: import type { Application } from '@/types'
// Use: import type { Application } from '../types/application'

// Common patterns:
// From services/: import type { Job } from '../types/job'
// From stores/: import type { User } from '../types/user'  
// From hooks/: import type { Application } from '../types/application'
// From components/: import type { Job } from '../../types/job'

// This bypasses the barrel export @/types completely