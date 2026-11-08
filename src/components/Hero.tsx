import { profile, windows } from '../data/profile'
import { tileIcons } from '../data/tileIcons'
import type { Theme } from '../hooks/useTheme'
import { Button } from './Button'
import { Panel } from './Panel'
import { ThemeToggle } from './ThemeToggle'
import { Wordmark } from './Wordmark'

type HeroProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Hero({ theme, onToggleTheme }: HeroProps) {
  return (
    <header
      id="home"
      className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,800fr)_minmax(0,520fr)] lg:gap-6 lg:pt-16"
    >
      <div>
        <p className="mb-5 flex justify-between gap-3 text-[14px] lg:mb-7 lg:text-[16px]">
          <span>
            <span className="text-dim">{profile.host} ~ $</span> whoami
          </span>
          <ThemeToggle className="-my-3 self-start py-3 lg:hidden" theme={theme} onToggle={onToggleTheme} />
        </p>

        <h1>
          <Wordmark label={profile.name} />
        </h1>

        <p className="mt-6 max-w-[42ch] text-[17px]/[1.5] lg:mt-9 lg:text-[22px]/[1.5]">{profile.lead}</p>

        <div className="mt-6 flex gap-3 lg:mt-8">
          <Button variant="primary" href="#projects">
            view projects
          </Button>
          <Button href={profile.cvUrl}>
            download cv
          </Button>
        </div>

        <nav className="mt-6 grid grid-cols-3 gap-2 lg:hidden" aria-label="Section shortcuts">
          {windows
            .filter(({ id }) => id !== 'home')
            .map(({ key, id }) => (
              <a
                key={id}
                className="flex min-h-23 flex-col items-center justify-center gap-2 border border-line2 bg-pane text-[13px] hover:border-amt"
                href={`#${id}`}
              >
                <svg className="flex-none fill-wm" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
                  <path d={tileIcons[id]} />
                </svg>
                <span>
                  {key}:{id}
                </span>
              </a>
            ))}
        </nav>
      </div>

      <Panel title="neofetch">
        <div className="flex flex-1 flex-col justify-between gap-3.5 text-[14px]">
          <p className="text-[15px] font-bold text-amt">{profile.host}</p>
          <dl className="contents">
            {profile.neofetch.map(([key, value]) => (
              <div className="grid grid-cols-[9ch_1fr] gap-3" key={key}>
                <dt className="text-dim">{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Panel>
    </header>
  )
}
