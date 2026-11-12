import { useRef } from 'react'

export type PhotoSrc = {
  src: string
  alt: string
  /** CSS object-position for the cropped thumbnail, like 'center 80%'. Defaults to center. */
  position?: string
}

/**
 * A cropped, lazy-loaded photo that opens uncropped in a native <dialog>.
 * The preview reuses the same file, so it is already loaded when opened.
 * Esc, the close button or a click on the backdrop closes it.
 */
export function Photo({ photo, className = '' }: { photo: PhotoSrc; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null)

  const open = () => dialog.current?.showModal()
  const close = () => dialog.current?.close()

  return (
    <>
      <button
        type="button"
        className={`group relative block w-full cursor-zoom-in overflow-hidden border border-line2 bg-pane focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amt ${className}`}
        onClick={open}
        aria-label={`View larger: ${photo.alt}`}
      >
        <img
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          style={photo.position ? { objectPosition: photo.position } : undefined}
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
        />
      </button>

      <dialog
        ref={dialog}
        aria-label={photo.alt}
        className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-[rgb(8_8_6/0.9)]"
        onClick={(e) => {
          // A click on the backdrop targets the dialog itself, not its children
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="flex flex-col items-end gap-2">
          <button
            type="button"
            className="bg-ink px-3 py-1 text-[13px] font-bold text-paper hover:underline focus-visible:outline-2 focus-visible:outline-amber"
            onClick={close}
          >
            [x] close
          </button>
          <img
            className="max-h-[calc(100dvh-5rem)] max-w-[calc(100vw-2rem)] object-contain"
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </dialog>
    </>
  )
}
