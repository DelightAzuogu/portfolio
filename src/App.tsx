import { Hero } from './components/Hero'
import { StatusBar } from './components/StatusBar'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex min-h-dvh flex-col">
      <StatusBar theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 pb-18 lg:px-12 lg:pb-30">
        <Hero theme={theme} onToggleTheme={toggleTheme} />
      </main>
    </div>
  )
}

export default App
