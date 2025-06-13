import { applicationService } from './application.service'
import { authService } from './auth.service'
import { jobService } from './job.service'

// Export all services as a single object for easier imports
export default {
  auth: authService,
  job: jobService,
  application: applicationService
}