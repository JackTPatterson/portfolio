import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "JPX Software: custom apps & systems for DTC brands",
  description:
    "JPX Software builds mobile apps, drop and restock experiences, and the systems behind them for Shopify brands that have outgrown plug-ins.",
}

const CONTACT = "jack.patterson@jpxsoftware.studio"
const CALL_LINK = `mailto:${CONTACT}?subject=${encodeURIComponent("15-minute call with JPX Software")}`

const offerings = [
  {
    name: "Drop-day mobile apps",
    description:
      "An iOS and Android app connected to your existing Shopify store. It covers drop countdowns, early access for your core customers, restock alerts by size, and push notifications the moment a release goes live.",
  },
  {
    name: "App rescue & reliability",
    description:
      "Already have an app that struggles on drop day or Black Friday? We find where checkout, wishlists and cart sync break under load, and we fix them before your next launch.",
  },
  {
    name: "Customer experience systems",
    description:
      "Order tracking customers can check themselves, alerts for stuck shipments, and restock requests captured as data you can reorder from. These are the systems that cut \"where's my order?\" email.",
  },
  {
    name: "Team, club & event ordering",
    description:
      "Saved rosters and one-click reorders for teams and clubs, plus merch pre-orders with pickup at the venue, built on top of the custom ordering you already run.",
  },
]

const steps = [
  {
    label: "01",
    name: "Teardown",
    description:
      "A short, fixed-scope review of your store, app and reviews. You get a written plan: what's breaking, what it's costing you, and what to build first.",
  },
  {
    label: "02",
    name: "Build the first version",
    description:
      "One focused release built on your existing store and tools, not a rebuild. You see working software early and give feedback every week.",
  },
  {
    label: "03",
    name: "Support & iterate",
    description:
      "After launch we keep it fast and stable through your drops and holiday peaks, and grow it based on what your customers actually use.",
  },
]

export default function JPXHome() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-20">
      <section className="space-y-6">
        <div className="text-xs tracking-wider text-muted-foreground">JPX SOFTWARE</div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Custom apps and software for direct-to-consumer brands.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We build mobile apps, drop and restock experiences, and the systems behind them for
          Shopify brands that have outgrown plug-ins. It all connects to the store you already run.
        </p>
        <Link
          href={CALL_LINK}
          className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          <span className="text-base sm:text-lg">Book a 15-minute call</span>
          <ArrowUpRight size={16} className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </section>

      <section className="space-y-6 border-t border-border pt-12">
        <div className="text-xs tracking-wider text-muted-foreground">WHAT WE BUILD</div>
        <div className="grid sm:grid-cols-2 gap-6">
          {offerings.map((o) => (
            <div key={o.name} className="space-y-3 p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300">
              <h2 className="text-lg font-medium">{o.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-border pt-12">
        <div className="text-xs tracking-wider text-muted-foreground">HOW WE WORK</div>
        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.label} className="grid grid-cols-[3rem_1fr] gap-4">
              <div className="text-sm text-muted-foreground tabular-nums pt-0.5">{s.label}</div>
              <div className="space-y-2">
                <h2 className="text-lg font-medium">{s.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 border-t border-border pt-12">
        <div className="text-xs tracking-wider text-muted-foreground">WHO YOU WORK WITH</div>
        <p className="text-base leading-relaxed max-w-2xl">
          JPX is founder-led. You work directly with the engineer building your product: no account
          managers and no handoffs.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Jack Patterson, founder. He has built enterprise software used by major companies, including
          the software behind a patent-pending system.
        </p>
      </section>

      <section className="space-y-4 border-t border-border pt-12">
        <div className="text-xs tracking-wider text-muted-foreground">GET STARTED</div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Tell us what's breaking on drop day, or what you wish your store could do. We'll reply
          within one business day.
        </p>
        <Link
          href={`mailto:${CONTACT}`}
          className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          <span className="text-base sm:text-lg">{CONTACT}</span>
          <ArrowUpRight size={16} className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </section>

      <footer className="border-t border-border pt-8 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:justify-between">
        <div>© {new Date().getFullYear()} JPX Software Inc.</div>
        <div>116 Astor Avenue, St. James, NY 11780</div>
      </footer>
    </div>
  )
}
