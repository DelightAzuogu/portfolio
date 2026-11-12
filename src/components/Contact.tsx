import { profile } from '../data/profile'
import { Button } from './Button'
import { Section } from './Section'

const links = [
  { label: 'email', text: profile.email, href: `mailto:${profile.email}` },
  { label: 'github', text: profile.github.replace('https://', ''), href: profile.github },
  { label: 'linkedin', text: profile.linkedin.replace('https://www.', '').replace(/\/$/, ''), href: profile.linkedin },
]

export function Contact() {
  return (
    <Section id="contact" command="./say-hello.sh">
      <p className="text-[38px]/[1.1] font-bold tracking-[-0.03em] text-amt lg:text-[72px]/[1.1]">
        Got something to build?
      </p>
      <div className="mt-6 flex lg:mt-8">
        <Button variant="primary" href={`mailto:${profile.email}`}>
          send email
        </Button>
      </div>
      <ul className="mt-8 flex flex-col gap-3 lg:mt-12 lg:flex-row lg:gap-16">
        {links.map((link) => (
          <li key={link.label} className="flex gap-3 lg:flex-col lg:gap-0">
            <span className="w-[9ch] flex-none text-dim lg:w-auto">{link.label}</span>
            <a
              className="min-w-0 break-words hover:text-amt hover:underline hover:underline-offset-4"
              href={link.href}
              target={link.label === 'email' ? undefined : '_blank'}
              rel="noreferrer"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
