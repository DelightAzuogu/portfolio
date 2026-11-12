import { profile } from '../data/profile'
import { races, running, type Race } from '../data/runs'
import { Panel } from './Panel'
import { Photo } from './Photo'
import { Section } from './Section'

export function Runs() {
  return (
    <Section id="runs" command="systemctl status running">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,432fr)_minmax(0,888fr)] lg:gap-6">
        <ul className="flex flex-col justify-center gap-6 bg-amber px-5 py-6 text-ink selection:bg-ink selection:text-amber lg:gap-7 lg:px-7 lg:py-8">
          {running.runs.map((run, i) => (
            <li key={i} className="flex flex-col gap-1">
              <span className="text-[40px]/none font-bold tracking-[-0.03em] lg:text-[52px]/none">{run.distance}</span>
              <span className="text-[17px] font-medium">{run.name}</span>
            </li>
          ))}
        </ul>

        <Panel title="[5] runs">
          <div className="flex flex-col gap-0.5 text-[14px]">
            <p className="font-bold">
              <span className="text-ok" aria-hidden="true">
                ●
              </span>{' '}
              running.service
            </p>
            <div className="grid grid-cols-[8ch_1fr] gap-2">
              <span className="text-dim">Loaded:</span>
              <span>loaded (/home/delight/legs; enabled)</span>
            </div>
            <div className="grid grid-cols-[8ch_1fr] gap-2">
              <span className="text-dim">Active:</span>
              <span>
                <span className="text-ok">active (running)</span>
                {running.since && ` since ${running.since}`}
              </span>
            </div>
            {profile.strava && (
              <div className="grid grid-cols-[8ch_1fr] gap-2">
                <span className="text-dim">Docs:</span>
                <a
                  className="self-start text-amt underline underline-offset-4"
                  href={profile.strava}
                  target="_blank"
                  rel="noreferrer"
                >
                  strava
                </a>
              </div>
            )}
          </div>

          {races.length > 0 && (
            <ul className="mt-7 grid gap-5 lg:grid-cols-2">
              {races.map((race) => (
                <li key={race.label} className="flex flex-col gap-3">
                  {race.photo && <Photo photo={race.photo} className="aspect-[4/3]" />}
                  <Bib race={race} />
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </Section>
  )
}

// Pin holes show the page through the bib; in light mode the page is too close to paper, so darken them
const pin = 'absolute size-3 rounded-full bg-bg light:bg-line2'

/** A paper race bib with safety-pin holes and a tear-off strip. */
function Bib({ race }: { race: Race }) {
  return (
    <div className="relative bg-paper text-ink selection:bg-ink selection:text-paper light:border light:border-line2">
      <i className={`${pin} top-2.5 left-2.5`} aria-hidden="true" />
      <i className={`${pin} top-2.5 right-2.5`} aria-hidden="true" />
      <i className={`${pin} bottom-2.5 left-2.5`} aria-hidden="true" />
      <i className={`${pin} right-2.5 bottom-2.5`} aria-hidden="true" />
      <div className="flex justify-between gap-3 bg-amber px-8 py-[9px] text-[13px] font-bold">
        <span>{race.name}</span>
        <span>
          {race.city}, {race.year}
        </span>
      </div>
      <p className="px-8 pt-6 pb-5 text-[38px]/[1.1] font-bold tracking-[-0.03em] lg:pt-8 lg:pb-7 lg:text-[46px]/[1.1]">
        {race.bib ?? race.time}
      </p>
      <div className="flex items-baseline justify-between gap-3 border-t-2 border-dashed border-[#6e6a5c] px-8 pt-2.5 pb-3 text-[13px] font-bold">
        <span>{race.label}</span>
        <span>
          {race.bib && <span className="text-[18px]">{race.time}</span>}
          <span className="ml-2 font-medium">{race.pace} /km</span>
        </span>
      </div>
    </div>
  )
}
