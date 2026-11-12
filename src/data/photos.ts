import type { PhotoSrc } from '../components/Photo'
import dgfc6a from '../assets/photos/6th-digital-global-future-conference-2025-1.jpg'
import dgfc6b from '../assets/photos/6th-digital-global-future-conference-2025-2.jpg'
import dgfc7a from '../assets/photos/7th-digital-global-future-conference-2026-1.jpg'
import dgfc7b from '../assets/photos/7th-digital-global-future-conference-2026-2.jpg'
import girne from '../assets/photos/girne-half-marathon-2026.jpg'
import lefkosa from '../assets/photos/lefkosa-half-marathon-2026.jpg'

// 2400px on the long side. Lazy loaded on the page, same file reused in the preview (see Photo.tsx).
// To add one: resize the original to 2400px on the long side (JPG, ~quality 82), save it in
// src/assets/photos/ with a descriptive kebab-case name, import it here. Keep originals out of public/.
export const photos = {
  dgfc6: [
    { src: dgfc6a, alt: 'Delight speaking at the 6th Digital Global Future Conference, 2025' },
    { src: dgfc6b, alt: 'Delight at the 6th Digital Global Future Conference, 2025' },
  ],
  dgfc7: [
    { src: dgfc7a, alt: 'Delight speaking at the 7th Digital Global Future Conference, 2026', position: 'center 85%' },
    { src: dgfc7b, alt: 'Delight at the 7th Digital Global Future Conference, 2026' },
  ],
  girne: { src: girne, alt: 'Delight at the Girne Half Marathon, 2026' },
  lefkosa: { src: lefkosa, alt: 'Delight at the Lefkoşa Half Marathon, 2026' },
} satisfies Record<string, PhotoSrc | PhotoSrc[]>
