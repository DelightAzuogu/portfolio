import type { KeyboardEvent } from 'react'

/**
 * Props for a clickable row whose text can still be highlighted and copied.
 * A real <button> blocks text selection in Chrome, so rows use role="button" instead,
 * and a click that ends a drag-selection is ignored so selecting text never toggles the row.
 */
export function selectableRow(onActivate: () => void) {
  return {
    role: 'button',
    tabIndex: 0,
    onClick: () => {
      if (window.getSelection()?.toString()) return
      onActivate()
    },
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onActivate()
      }
    },
  } as const
}
