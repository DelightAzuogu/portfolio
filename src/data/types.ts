export type Link = { label: string; href: string }

export type PhotoSrc = {
  src: string
  alt: string
  /** CSS object-position for the cropped card, like 'center 85%'. Defaults to center. */
  position?: string
}
