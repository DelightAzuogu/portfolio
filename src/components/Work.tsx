import { useState, type KeyboardEvent } from 'react'
import { jobs, stack } from '../data/work'
import { selectableRow } from '../lib/selectableRow'
import { Panel } from './Panel'
import { Section } from './Section'

const monthFormat = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' })

function formatMonth(yearMonth: string) {
  return monthFormat.format(new Date(`${yearMonth}-01T00:00:00Z`))
}

export function Work() {
  // null shows the full stack; a number shows that job's stack
  const [selected, setSelected] = useState<number | null>(null)
  const job = selected === null ? null : jobs[selected]
  const shown = job ? job.stack : stack

  function onListKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') setSelected(null)
  }

  return (
    <Section id="work" command="git log career">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,774fr)_minmax(0,546fr)] lg:gap-6">
        <Panel title="[2] work" focus={job !== null}>
          {/* Commit graph: a rail on the left with one square node per job */}
          <ol
            className="relative flex flex-col gap-5 pl-7 before:absolute before:top-2.5 before:bottom-[30px] before:left-[5px] before:w-0.5 before:bg-line2 before:content-['']"
            onKeyDown={onListKeyDown}
          >
            {jobs.map((item, index) => {
              const head = index === 0
              const isSelected = index === selected
              return (
                <li key={item.start} className="relative">
                  <i
                    className={`absolute top-3.5 -left-7 size-3 ${head || isSelected ? 'bg-amber' : 'bg-line2'}`}
                    aria-hidden="true"
                  />
                  <div
                    {...selectableRow(() => setSelected(isSelected ? null : index))}
                    className={`-mx-2 grid w-[calc(100%+1rem)] cursor-pointer gap-x-6 gap-y-1 px-2 py-2 text-left lg:grid-cols-[18ch_1fr] ${
                      isSelected ? 'bg-pane' : 'hover:bg-pane'
                    }`}
                    aria-pressed={isSelected}
                    aria-controls="job-stack"
                  >
                    <span className="text-dim">
                      <time dateTime={item.start}>{formatMonth(item.start)}</time>
                      {head && (
                        <span className="ml-1 bg-amber px-1.5 py-px text-[12px] font-bold text-ink">HEAD</span>
                      )}
                    </span>
                    <span className="flex flex-col">
                      <span className={`text-[15px] font-medium lg:text-[17px] ${isSelected ? 'text-amt' : ''}`}>
                        {item.role}
                      </span>
                      <span className="text-dim">{item.company}</span>
                    </span>
                  </div>

                  {/* Mobile: the stack pane is far below, so show this job's stack inline */}
                  {isSelected && (
                    <ul className="mt-3 flex flex-wrap gap-2 lg:hidden">
                      {item.stack.flatMap(([, value]) => value.split(', ')).map((tag) => (
                        <li key={tag} className="border border-line2 px-2.5 py-0.5 text-[13px]">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ol>
        </Panel>

        <Panel title={job ? `${job.slug}.json` : 'stack.json'}>
          {/* The full stack fills the pane height like the design; a short job stack stays at the top */}
          <div
            id="job-stack"
            aria-live="polite"
            className={`flex flex-1 flex-col gap-2 text-[14px] ${job ? 'gap-y-3' : 'justify-between'}`}
          >
            <div>{'{'}</div>
            {shown.map(([key, value], index) => (
              <div key={key} className="pl-[2ch]">
                <span className="text-amt">"{key}"</span>: <span>{value}</span>
                {index < shown.length - 1 && ','}
              </div>
            ))}
            <div>{'}'}</div>
            <p className="mt-auto pt-2 text-dim">
              {job ? (
                <button
                  type="button"
                  className="cursor-pointer text-amt underline underline-offset-4"
                  onClick={() => setSelected(null)}
                >
                  show full stack
                </button>
              ) : (
                'select a role to see its stack'
              )}
            </p>
          </div>
        </Panel>
      </div>
    </Section>
  )
}
