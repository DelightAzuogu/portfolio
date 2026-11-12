import { photos } from './photos'
import type { PhotoSrc } from './types'

export type Race = {
  /** Shown on the tear-off strip, like half-01 */
  label: string
  name: string
  distance: string
  city: string
  year: string
  bib: string
  /** Finish time */
  time: string
  /** Average pace per km, like 5:42 */
  pace: string
  photo?: PhotoSrc
}

/** Date of the first race, like "Mar 2024". Empty hides it. */
export const runningSince = 'Oct 2026'

/** Oldest first. Listed in the amber block and pinned as bibs under the status panel. */
export const races: Race[] = [
  {
    label: 'half-01',
    name: 'Girne Half Marathon',
    distance: '21.1 km',
    city: 'Girne',
    year: '2026',
    bib: '2148',
    time: '2h 25m',
    pace: '6:40',
    photo: photos.girne,
  },
  {
    label: 'half-02',
    name: 'Lefkoşa Half Marathon',
    distance: '21.1 km',
    city: 'Lefkoşa',
    year: '2026',
    bib: '21149',
    time: '2h 02m',
    pace: '5:42',
    photo: photos.lefkosa,
  },
]
