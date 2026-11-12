import type { ComponentProps } from 'react'

/** Amber underlined inline link. Off-site links open in a new tab. */
export function TextLink({ className = '', href = '', ...props }: ComponentProps<'a'>) {
  const external = /^https?:/.test(href)
  return (
    <a
      className={`text-amt underline underline-offset-4 ${className}`}
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      {...props}
    />
  )
}
