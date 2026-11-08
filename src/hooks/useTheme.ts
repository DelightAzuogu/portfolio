import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

/** The inline script in index.html sets data-theme before first paint; this reads it back. */
function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  const toggleTheme = useCallback(() => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked. The theme still applies for this visit.
    }
    setTheme(next)
  }, [])

  return { theme, toggleTheme }
}
