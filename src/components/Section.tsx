import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  compact?: boolean
  children: ReactNode
}

export default function Section({ id, title, compact = false, children }: SectionProps) {
  return (
    <section id={id} className={`section container${compact ? ' section-compact' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}
