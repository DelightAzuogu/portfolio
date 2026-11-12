import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Runs } from './components/Runs'
import { StatusBar } from './components/StatusBar'
import { Talks } from './components/Talks'
import { Thesis } from './components/Thesis'
import { Work } from './components/Work'
import { profile } from './data/profile'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex min-h-dvh flex-col">
      <StatusBar theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 lg:px-12">
        <Hero theme={theme} onToggleTheme={toggleTheme} />
        <Projects />
        <Work />
        <Thesis />
        <Talks />
        <Runs />
        <Contact />
        <footer className="flex flex-col gap-1 pt-18 pb-8 text-[14px] lg:flex-row lg:justify-between lg:gap-4 lg:pt-30 lg:pb-10">
          <span>
            <span className="text-dim">~ $</span> logout
          </span>
          <span className="text-dim">© {new Date().getFullYear()} {profile.name}</span>
        </footer>
      </main>
    </div>
  )
}

export default App
