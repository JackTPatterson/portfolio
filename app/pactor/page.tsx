import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function PactorHome() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16">
      <section className="space-y-6">
        <div className="text-xs tracking-wider text-muted-foreground">
          PRIVATE • INVITE-ONLY • NON-CUSTODIAL
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Pactor is a private app for making wagers with people you already
          know.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Pools are joinable only by direct invitation from the pool creator.
          There is no public marketplace, no discovery feed, and no way for
          strangers to find or join a pool. Settlement happens on-chain in
          USDC on the Base network using audited open-source smart contracts.
          Pactor never holds your funds.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 gap-8 border-t border-border pt-12">
        <div className="space-y-2">
          <div className="text-xs tracking-wider text-muted-foreground">
            HOW POOLS WORK
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            One user creates a pool, picks a flat USDC fee, and personally
            invites friends. Each participant stakes USDC into an on-chain
            escrow contract. A resolver designated at creation proposes the
            outcome; participants have a challenge window before the contract
            pays winners directly to their wallet.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-xs tracking-wider text-muted-foreground">
            WHAT PACTOR IS NOT
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pactor is not a public prediction market, sportsbook,
            daily-fantasy-sports operator, or regulated gambling product.
            Pactor does not facilitate wagering with strangers, take a
            percentage of stakes, or act as oracle or counterparty.
          </p>
        </div>
      </section>

      <section className="border-t border-border pt-12 space-y-4">
        <div className="text-xs tracking-wider text-muted-foreground">
          LEGAL
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <LinkCard
            href="/pactor/terms"
            title="Terms of Service"
            description="How Pactor works, what you agree to, and what we don't do."
          />
          <LinkCard
            href="/pactor/privacy"
            title="Privacy Policy"
            description="What we collect, where it goes, and how to delete it."
          />
          <LinkCard
            href="/pactor/support"
            title="Support"
            description="How to reach us and what we can help with."
          />
        </div>
      </section>
    </div>
  )
}

function LinkCard({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group block border border-border rounded-lg p-5 hover:border-muted-foreground/50 transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-base font-medium text-foreground">{title}</div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <div className="text-xs text-muted-foreground mt-2 leading-relaxed">
        {description}
      </div>
    </Link>
  )
}
