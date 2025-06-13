import { create } from 'zustand'
import type { Job } from '@/types/job'
import type { SearchFilters, PaginationParams } from '@/types/common'

interface JobState {
  jobs: Job[]
  savedJobs: number[] // Array of job IDs
  totalElements: number
  totalPages: number
  currentPage: number
  loading: boolean
  error: string | null
  filters: SearchFilters
  pagination: PaginationParams
}

interface JobActions {
  setJobs: (jobs: Job[]) => void
  addJob: (job: Job) => void
  updateJob: (job: Job) => void
  removeJob: (jobId: number) => void
  setPagination: (totalElements: number, totalPages: number, currentPage: number) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setFilters: (filters: SearchFilters) => void
  setPaginationParams: (pagination: PaginationParams) => void
  clearJobs: () => void
  saveJob: (jobId: number) => void
  unsaveJob: (jobId: number) => void
  isJobSaved: (jobId: number) => boolean
  reset: () => void
}

type JobStore = JobState & JobActions

const initialState: JobState = {
  jobs: [],
  savedJobs: [],
  totalElements: 0,
  totalPages: 0,
  currentPage: 0,
  loading: false,
  error: null,
  filters: {},
  pagination: { page: 0, size: 10 }
}

export const useJobStore = create<JobStore>((set, get) => ({
  ...initialState,

  // Actions
  setJobs: (jobs) =>
    set((state) => ({ jobs })),

  addJob: (job) =>
    set((state) => ({
      jobs: [job, ...state.jobs],
      totalElements: state.totalElements + 1
    })),

  updateJob: (updatedJob) =>
    set((state) => ({
      jobs: state.jobs.map(job =>
        job.id === updatedJob.id ? updatedJob : job
      )
    })),

  removeJob: (jobId) =>
    set((state) => ({
      jobs: state.jobs.filter(job => job.id !== jobId),
      totalElements: Math.max(0, state.totalElements - 1)
    })),

  setPagination: (totalElements, totalPages, currentPage) =>
    set((state) => ({
      totalElements,
      totalPages,
      currentPage
    })),

  setLoading: (loading) =>
    set((state) => ({ loading })),

  setError: (error) =>
    set((state) => ({ error })),

  setFilters: (filters) =>
    set((state) => ({ filters })),

  setPaginationParams: (pagination) =>
    set((state) => ({
      pagination: { ...state.pagination, ...pagination }
    })),

  clearJobs: () =>
    set((state) => ({
      jobs: [],
      totalElements: 0,
      totalPages: 0,
      currentPage: 0
    })),

  saveJob: (jobId) =>
    set((state) => ({
      savedJobs: state.savedJobs.includes(jobId)
        ? state.savedJobs
        : [...state.savedJobs, jobId]
    })),

  unsaveJob: (jobId) =>
    set((state) => ({
      savedJobs: state.savedJobs.filter(id => id !== jobId)
    })),

  isJobSaved: (jobId) => {
    const { savedJobs } = get()
    return savedJobs.includes(jobId)
  },

  reset: () =>
    set((state) => ({ ...initialState }))
}))