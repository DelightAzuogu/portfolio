import { useRef, useState } from 'react'
import type { PhotoSrc } from '../data/types'

/**
 * A cropped, lazy-loaded photo that opens uncropped in a native <dialog>.
 * The preview <img> only mounts while open and reuses the cached file.
 * Esc, the close button or a click on the backdrop closes it.
 */
export function Photo({ photo, className = '' }: { photo: PhotoSrc; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  const show = () => {
    setOpen(true)
    dialog.current?.showModal()
  }
  const close = () => dialog.current?.close()

  return (
    <>
      <button
        type="button"
        className={`group block w-full cursor-zoom-in overflow-hidden border border-line2 bg-pane ${className}`}
        onClick={show}
        aria-label={`View larger: ${photo.alt}`}
      >
        <img
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          style={{ objectPosition: photo.position }}
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
        />
      </button>

      <dialog
        ref={dialog}
        aria-label={photo.alt}
        className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-ink/90"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // A click on the backdrop targets the dialog itself, not its children
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="flex flex-col items-end gap-2">
          {/* Amber, not amt: the outline must stay visible on the dark backdrop in light mode too */}
          <button
            type="button"
            className="bg-ink px-3 py-1 text-[13px] font-bold text-paper hover:underline focus-visible:outline-amber"
            onClick={close}
          >
            [x] close
          </button>
          {open && (
            <img
              className="max-h-[calc(100dvh-5rem)] max-w-[calc(100vw-2rem)] object-contain"
              src={photo.src}
              alt={photo.alt}
            />
          )}
        </div>
      </dialog>
    </>
  )
}
