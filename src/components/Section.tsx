import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  /** Shell command used as the section heading */
  command: string
  children: ReactNode
}

export function Section({ id, command, children }: SectionProps) {
  return (
    <section id={id} className="pt-18 lg:pt-30">
      <h2 className="mb-7 text-[20px]/[1.3] font-medium lg:mb-9 lg:text-[30px]/[1.3]">
        <span className="text-dim">~ $</span> {command}
      </h2>
      {children}
    </section>
  )
}
