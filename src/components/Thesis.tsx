import { educationTree, thesis } from '../data/thesis'
import { Panel } from './Panel'
import { Section } from './Section'
import { TextLink } from './TextLink'

const label = 'text-[14px] font-bold text-amt'
const row = 'grid gap-x-6 gap-y-1 lg:grid-cols-[14ch_1fr]'

export function Thesis() {
  return (
    <Section id="thesis" command="man thesis">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,888fr)_minmax(0,432fr)] lg:gap-6">
        <Panel title="[3] thesis">
          <article className="flex flex-col gap-5">
            <header className="flex justify-between text-[14px] font-bold">
              <span>THESIS(7)</span>
              <span className="hidden lg:inline">MSc Thesis Manual</span>
              <span>THESIS(7)</span>
            </header>

            <div className={row}>
              <span className={label}>NAME</span>
              <h3 className="max-w-[68ch] text-[18px]/[1.35] font-medium lg:text-[22px]/[1.35]">{thesis.title}</h3>
            </div>

            {thesis.sections.map(([name, value]) => (
              <div key={name} className={row}>
                <span className={label}>{name}</span>
                <p className="max-w-[68ch]">{value}</p>
              </div>
            ))}

            <div className={row}>
              <span className={label}>SEE ALSO</span>
              <p className="flex gap-6">
                {thesis.seeAlso.map((link) => (
                  <TextLink key={link.href} href={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </p>
            </div>

            <footer className="flex justify-between text-[14px] text-dim">
              <span>Cyprus International University</span>
              <span>{thesis.year}</span>
            </footer>
          </article>
        </Panel>

        <Panel title="tree">
          <ul className="text-[14px]/[1.75]">
            <li className="font-bold">education/</li>
            {educationTree.map(([branch, text, href]) => (
              <li key={text} className="flex whitespace-pre">
                <span className="flex-none text-dim" aria-hidden="true">
                  {branch}
                </span>
                {href ? (
                  <a className="whitespace-normal text-amt" href={href} target="_blank" rel="noreferrer">
                    {text}
                  </a>
                ) : (
                  <span className="whitespace-normal">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </Section>
  )
}
