import { useRef, useState, type KeyboardEvent } from 'react'
import { profile } from '../data/profile'
import { projects, type Project } from '../data/projects'
import { selectableRow } from '../lib/selectableRow'
import { Button } from './Button'
import { Panel } from './Panel'
import { Section } from './Section'

export function Projects() {
  const [selected, setSelected] = useState(0)
  const rows = useRef<(HTMLDivElement | null)[]>([])
  const current = projects[selected]

  // Arrow keys and j/k move through the list, like lazygit
  function onListKeyDown(event: KeyboardEvent) {
    const step = { ArrowDown: 1, j: 1, ArrowUp: -1, k: -1 }[event.key]
    if (!step) return
    event.preventDefault()
    const next = (selected + step + projects.length) % projects.length
    setSelected(next)
    rows.current[next]?.focus()
  }

  return (
    <Section id="projects" command="ls projects/">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,546fr)_minmax(0,774fr)] lg:gap-6">
        <Panel title="[1] projects" titleRight={`${selected + 1} of ${projects.length}`} focus>
          <ul className="-mx-1 -mt-1 flex flex-1 flex-col gap-1 lg:-mx-2 lg:-mt-2" onKeyDown={onListKeyDown}>
            {projects.map((project, index) => {
              const isSelected = index === selected
              return (
                <li key={project.name} className="flex flex-1 flex-col">
                  <div
                    ref={(element) => {
                      rows.current[index] = element
                    }}
                    {...selectableRow(() => setSelected(index))}
                    className={`min-h-22 w-full cursor-pointer p-4 text-left lg:flex lg:min-h-28 lg:flex-1 lg:flex-col lg:justify-center lg:px-4 lg:py-5 ${
                      isSelected ? 'bg-amber text-ink selection:bg-ink selection:text-amber' : 'hover:bg-pane'
                    }`}
                    aria-expanded={isSelected}
                    aria-controls="project-readme"
                  >
                    <span className="flex justify-between gap-4 whitespace-pre">
                      <span className={isSelected ? 'font-bold' : 'font-medium'}>
                        {isSelected ? '> ' : '  '}
                        {project.name}
                      </span>
                      <span className={`text-[13px] ${isSelected ? 'text-ink' : 'text-dim'}`}>{project.kind}</span>
                    </span>
                    <span className={`mt-1 block pl-[2ch] text-[13px] ${isSelected ? 'text-ink' : 'text-dim'}`}>
                      {project.summary}
                    </span>
                  </div>

                  {/* Mobile: the README opens under the selected row */}
                  {isSelected && (
                    <div className="px-3 pt-4 pb-6 lg:hidden">
                      <Readme project={project} />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </Panel>

        {/* Desktop: the README sits in its own pane */}
        <Panel title="README.md" className="hidden lg:flex">
          <div id="project-readme" className="flex flex-1 flex-col">
            <Readme project={current} />
          </div>
        </Panel>
      </div>

      <div className="mt-6 flex">
        <Button href={profile.github} target="_blank" rel="noreferrer">
          view all on github
        </Button>
      </div>
    </Section>
  )
}

function Readme({ project }: { project: Project }) {
  return (
    <div className="flex flex-1 flex-col">
      {project.result && (
        <div className="mb-5 flex min-h-40 flex-col justify-end gap-2 border border-line2 bg-pane p-5 lg:mb-6 lg:flex-1 lg:p-7">
          <span className="text-[44px]/none font-bold tracking-[-0.03em] text-amt lg:text-[72px]/none">
            {project.result.value}
          </span>
          <span className="text-dim">{project.result.label}</span>
        </div>
      )}
      <h3 className="text-[18px]/[1.3] font-bold lg:text-[24px]/[1.3]"># {project.name}</h3>
      <p className="mt-3 max-w-[62ch] text-dim">{project.description}</p>
      {project.tags && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="border border-line2 px-2.5 py-0.5 text-[13px]">
              {tag}
            </li>
          ))}
        </ul>
      )}
      {project.links && (
        <div className="mt-5 flex gap-6">
          {project.links.map((link) => (
            <a key={link.href} className="text-amt underline underline-offset-4" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
