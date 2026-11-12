import { photos } from './photos'
import { thesis } from './thesis'
import type { Link, PhotoSrc } from './types'

export type Talk = {
  conference: string
  organiser: string
  role: string
  year?: string
  title?: string
  /** Without photos the card stays text only. */
  photos?: PhotoSrc[]
  links?: Link[]
}

// Newest first.
export const talks: Talk[] = [
  {
    conference: '7th Digital Global Future Conference',
    organiser: 'Cyprus International University',
    role: 'Speaker',
    year: '2026',
    photos: photos.dgfc7,
    title: thesis.title,
    links: [{ label: 'recording', href: 'https://www.youtube.com/watch?v=rJUYG58gvBQ' }],
  },
  {
    conference: '6th Digital Global Future Conference',
    organiser: 'Cyprus International University',
    role: 'Speaker',
    year: '2025',
    photos: photos.dgfc6,
    title: 'Simple Optical Character Recognition (OCR) Using Machine Learning',
    links: [
      { label: 'recording', href: 'https://www.youtube.com/watch?v=uSLztSQ-V3c' },
      { label: 'certificate', href: 'https://drive.google.com/file/d/1Tk9W7VmKQ0addqJwbhHG6_D5Dl38MTlW/view' },
    ],
  },
]
