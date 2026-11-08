import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'secondary'
}

const base =
  'inline-flex h-12 flex-1 items-center justify-center border px-3 whitespace-nowrap lg:flex-none lg:px-6'

const variants = {
  primary: 'border-amber bg-amber font-bold text-ink hover:border-amt hover:bg-transparent hover:text-amt',
  secondary: 'border-line2 font-medium hover:border-amt hover:text-amt',
}

export function Button({ variant = 'secondary', ...props }: ButtonProps) {
  return <a className={`${base} ${variants[variant]}`} {...props} />
}
