import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Service = {
  name: string
  price: string
  cadence: string
  setup: string
  description: string
  included: string[]
}

const services: Service[] = [
  {
    name: "Google Review Agent",
    price: "$147",
    cadence: "/mo",
    setup: "No setup fee",
    description:
      "Automatically texts a customer asking for a Google review after their job is done and paid — never before. Turns paid jobs into 5-star reviews on autopilot.",
    included: ["Automated review-request SMS", "Triggered by your own job-done webhook", "No case studies needed to sell it"],
  },
  {
    name: "Off-Hours AI Receptionist",
    price: "$197",
    cadence: "/mo",
    setup: "No setup fee",
    description:
      "AI phone coverage for nights, weekends, and holidays — your own staff still answer during open hours. Upgrades to full 24/7 coverage later with no rebuild.",
    included: ["Custom AI voice agent", "After-hours call coverage", "Call-summary logging"],
  },
  {
    name: "AI Receptionist",
    price: "$397",
    cadence: "/mo",
    setup: "No setup fee",
    description:
      "24/7 AI phone receptionist: answers calls, books/reschedules/cancels on the calendar, and logs every call. Includes ~1,000 call-minutes/mo.",
    included: ["Custom AI voice agent", "Appointment booking + reschedule/cancel", "Call-summary logging", "After-hours fallback"],
  },
  {
    name: "AI Receptionist — SMS Reminders",
    price: "+$49",
    cadence: "/mo",
    setup: "Add-on, no setup fee",
    description:
      "Appointment reminders and confirmations by text for AI Receptionist clients — automatic on booking, and again before each upcoming appointment.",
    included: ["Booking confirmation text", "Pre-appointment reminder text"],
  },
]

export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16">
      <section className="space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          ← Back
        </Link>
        <div className="text-xs tracking-wider text-muted-foreground">JPDIGITAL / AGENCY SERVICES</div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          AI automation & web design, flat monthly pricing.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          No long-term contracts, cancel anytime. Start with a low-risk win, upgrade to full
          automation once it's paying for itself.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 gap-6 border-t border-border pt-12">
        {services.map((svc) => (
          <div key={svc.name} className="space-y-4 p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300">
            <div className="space-y-1">
              <h2 className="text-lg font-medium">{svc.name}</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-light tracking-tight">{svc.price}</span>
                <span className="text-muted-foreground text-sm">{svc.cadence}</span>
              </div>
              <div className="text-xs text-muted-foreground">{svc.setup} · cancel anytime</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
            <ul className="space-y-1.5">
              {svc.included.map((item) => (
                <li key={item} className="text-sm flex items-start gap-2">
                  <span className="text-muted-foreground">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="border-t border-border pt-12 space-y-4">
        <div className="text-xs tracking-wider text-muted-foreground">ALSO AVAILABLE</div>
        <div className="p-6 border border-border rounded-lg space-y-2">
          <h2 className="text-lg font-medium">Website Design & Hosting</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            High-performance, hand-built websites (perfect PageSpeed, local-business SEO,
            lead-capture forms) deployed on Vercel's static edge. Custom quote based on scope.
          </p>
        </div>
      </section>

      <section className="border-t border-border pt-12 space-y-4">
        <div className="text-xs tracking-wider text-muted-foreground">GET STARTED</div>
        <Link
          href="mailto:jpatterson@jpdigital.studio"
          className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          <span className="text-base sm:text-lg">jpatterson@jpdigital.studio</span>
          <ArrowUpRight size={16} className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </section>
    </div>
  )
}
