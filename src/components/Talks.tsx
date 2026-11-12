import { talks } from '../data/talks'
import { Panel } from './Panel'
import { Photo } from './Photo'
import { Section } from './Section'
import { TextLink } from './TextLink'

export function Talks() {
  return (
    <Section id="talks" command="cat talks.log">
      <Panel title="[4] talks">
        <ul className="grid gap-7 lg:grid-cols-2 lg:gap-6">
          {talks.map((talk) => (
            <li key={talk.conference} className="flex flex-col gap-4">
              {talk.photos && (
                <div className="grid grid-cols-2 gap-2">
                  {talk.photos.map((p) => (
                    <Photo key={p.src} photo={p} className="aspect-[4/3]" />
                  ))}
                </div>
              )}
              <div className="flex flex-col gap-1.5">
                {talk.year && <span className="text-dim">{talk.year}</span>}
                <div className="flex flex-col">
                  <h3 className="text-[18px]/[1.35] font-medium lg:text-[22px]/[1.35]">{talk.conference}</h3>
                  <span className="text-dim">{talk.organiser}</span>
                </div>
                <div className="flex flex-col">
                  {talk.title && <span>{talk.title}</span>}
                  <span className="text-dim">{talk.role}</span>
                </div>
                {talk.links && (
                  <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                    {talk.links.map((l) => (
                      <TextLink key={l.href} href={l.href}>
                        {l.label}
                      </TextLink>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </Section>
  )
}
