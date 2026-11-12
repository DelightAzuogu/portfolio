import type { ReactNode } from 'react'

type PanelProps = {
  title: string
  /** Secondary label on the right of the top edge, like a position counter */
  titleRight?: string
  /** Focused pane: amber border and title, like the active tmux pane */
  focus?: boolean
  className?: string
  children: ReactNode
}

const edge = 'absolute -top-[11px] bg-bg px-2 text-[14px]/[22px]'

/** Bordered terminal pane with its title sitting on the top edge. */
export function Panel({ title, titleRight, focus = false, className = '', children }: PanelProps) {
  return (
    <div
      className={`relative flex flex-col border px-4 pt-7 pb-5 lg:px-6 lg:pt-8 lg:pb-6 ${
        focus ? 'border-amber' : 'border-line2'
      } ${className}`}
    >
      <span className={`${edge} left-4 ${focus ? 'font-bold text-amt' : 'text-dim'}`}>{title}</span>
      {titleRight && <span className={`${edge} right-4 text-dim`}>{titleRight}</span>}
      {children}
    </div>
  )
}
