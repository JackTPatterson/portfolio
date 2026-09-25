// Shared skeleton for legal documents. Projects with more than one doc use this
// instead of re-declaring the same header/Section/footer in every page.
import Link from "next/link"
import type { ReactNode } from "react"

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-8 space-y-3">
      <div className="text-xs tracking-wider text-muted-foreground">{title}</div>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-4">{children}</div>
    </section>
  )
}

export interface SiblingDoc {
  href: string
  label: string
}

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  siblings,
  children,
}: {
  eyebrow: string
  title: string
  lastUpdated: string
  intro?: ReactNode
  siblings: SiblingDoc[]
  children: ReactNode
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-12">
      <header className="space-y-3">
        <div className="text-xs tracking-wider text-muted-foreground">{eyebrow}</div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
      </header>

      {intro && (
        <section className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          {intro}
        </section>
      )}

      {children}

      <footer className="border-t border-border pt-8 text-sm flex flex-wrap gap-x-6 gap-y-2">
        {siblings.map((s) => (
          <Link key={s.href} className="underline text-muted-foreground" href={s.href}>
            {s.label}
          </Link>
        ))}
      </footer>
    </div>
  )
}
