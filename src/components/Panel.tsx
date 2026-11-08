import type { ReactNode } from 'react'

type PanelProps = {
  title: string
  children: ReactNode
}

/** Bordered terminal pane with its title sitting on the top edge. */
export function Panel({ title, children }: PanelProps) {
  return (
    <div className="relative flex flex-col border border-line2 px-4 pt-7 pb-5 lg:px-6 lg:pt-8 lg:pb-6">
      <span className="absolute -top-[11px] left-4 bg-bg px-2 text-[14px]/[22px] text-dim">{title}</span>
      {children}
    </div>
  )
}
