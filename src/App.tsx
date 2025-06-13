import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { PublicLayout } from '@/components/layout'
import { THEME_CONFIG } from '@/constants'
import './App.css'

function App() {
  return (
    <ThemeProvider 
      defaultTheme={THEME_CONFIG.DEFAULT_THEME} 
      storageKey={THEME_CONFIG.STORAGE_KEY}
    >
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased theme-transition">
          <PublicLayout />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App