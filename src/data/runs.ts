import type { PhotoSrc } from '../components/Photo'
import { photos } from './photos'

export type Race = {
  /** Shown on the tear-off strip, like half-01 */
  label: string
  name: string
  city: string
  year: string
  /** Bib number. Without one, the finish time takes its place. */
  bib?: string
  /** Finish time */
  time: string
  /** Average pace per km, like 5:42 */
  pace: string
  photo?: PhotoSrc
}

export const running = {
  /** Each finished run, listed one by one in the amber block. */
  runs: [
    { distance: '21.1 km', name: 'Girne Half Marathon' },
    { distance: '21.1 km', name: 'Lefkoşa Half Marathon' },
  ],
  /** Date of the first race, like "Mar 2024". Empty hides it. */
  since: 'Oct 2026',
}

/** Race bibs pinned under the status panel. Empty renders no bibs. */
export const races: Race[] = [
  { label: 'half-01', name: 'Girne Half Marathon', city: 'Girne', year: '2026', bib: '2148', time: '2h 25m', pace: '6:40', photo: photos.girne },
  { label: 'half-02', name: 'Lefkoşa Half Marathon', city: 'Lefkoşa', year: '2026', bib: '21149', time: '2h 02m', pace: '5:42', photo: photos.lefkosa },
]
