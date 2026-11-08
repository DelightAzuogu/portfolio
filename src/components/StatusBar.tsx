import { useEffect } from 'react'
import { profile, windows } from '../data/profile'
import type { Theme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

type StatusBarProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function StatusBar({ theme, onToggleTheme }: StatusBarProps) {
  useEffect(() => {
    function jump(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return
      const target = event.target as HTMLElement
      if (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return

      const match = windows.find((window) => String(window.key) === event.key)
      if (match) document.getElementById(match.id)?.scrollIntoView()
    }

    document.addEventListener('keydown', jump)
    return () => document.removeEventListener('keydown', jump)
  }, [])

  return (
    <nav
      className="sticky bottom-0 z-10 order-2 flex h-14 flex-none items-stretch gap-5 overflow-x-auto border-t border-line bg-pane text-[14px] [scrollbar-width:none] lg:top-0 lg:bottom-auto lg:order-none lg:h-11 lg:gap-6 lg:overflow-hidden lg:border-t-0 lg:border-b lg:pr-12 [&::-webkit-scrollbar]:hidden [&_:focus-visible]:-outline-offset-2"
      aria-label="Sections"
    >
      <a className="flex items-center bg-amber px-4 font-bold text-ink focus-visible:outline-ink" href="#home">
        {profile.session}
      </a>
      {windows.map(({ key, id }) => {
        const active = id === 'home'
        return (
          <a
            key={id}
            className={`flex items-center whitespace-nowrap last-of-type:pr-5 lg:last-of-type:pr-0 ${
              active ? 'font-bold text-amt' : 'text-dim hover:text-fg'
            }`}
            href={`#${id}`}
            aria-current={active ? 'location' : undefined}
          >
            {key}:{id}
            {active && '*'}
          </a>
        )
      })}
      <span className="ml-auto hidden self-center whitespace-nowrap text-dim wide:block">press 1-6 to jump</span>
      <ThemeToggle className="hidden lg:ml-auto lg:block wide:ml-0" theme={theme} onToggle={onToggleTheme} />
    </nav>
  )
}
