import { LegalPage, Section } from "../../_components/legal"

export const metadata = {
  title: "Locklandia — Returns & Refunds",
  description:
    "Your right to cancel a card order, how to return one, and what happens if it arrives faulty.",
}

const LAST_UPDATED = "September 1, 2026"

const SIBLINGS = [
  { href: "/legal/locklandia/privacy", label: "Privacy Policy" },
  { href: "/legal/locklandia/terms", label: "Terms of Sale & Service" },
]

export default function LocklandiaReturns() {
  return (
    <LegalPage
      eyebrow="LOCKLANDIA • RETURNS & REFUNDS"
      title="Returns & Refunds"
      lastUpdated={LAST_UPDATED}
      siblings={SIBLINGS}
      intro={
        <p>
          The card is a small physical product bought online, so you have a
          cancellation right on top of the usual protections for faulty goods.
        </p>
      }
    >
      <Section title="CHANGING YOUR MIND">
        <p>
          If you are a consumer in the UK or EU you have 14 days from the day the
          card arrives to cancel, for any reason and without explaining why.
          Tell us within that window and send the card back within 14 days of
          telling us.
        </p>
        <p>
          We refund the price of the card and the standard delivery cost within
          14 days of receiving it back. Return postage is yours to pay unless the
          card was faulty or we sent the wrong thing.
        </p>
      </Section>

      <Section title="IF IT ARRIVES FAULTY">
        <p>
          Cards are passive and have nothing to break, but if yours doesn&apos;t
          read reliably, email us and we&apos;ll replace it. You do not need to
          be within the 14 days for this, and we cover the postage.
        </p>
        <p>
          A replacement means the original card is deactivated on our side, so
          keep only the one you end up using.
        </p>
      </Section>

      <Section title="IF IT DOESN'T ARRIVE">
        <p>
          Contact us if it hasn&apos;t turned up within 14 days of dispatch in
          the UK, or 30 days internationally. We&apos;ll resend or refund.
        </p>
      </Section>

      <Section title="SUBSCRIPTIONS">
        <p>
          Plus is billed by Apple, so refunds for it are handled by Apple rather
          than by us. Request one through Apple&apos;s &ldquo;Report a
          Problem&rdquo; page or your purchase history.
        </p>
      </Section>

      <Section title="HOW TO START A RETURN">
        <p>
          Email the address on your receipt with your order number. You do not
          need a form or a returns number.
        </p>
      </Section>
    </LegalPage>
  )
}
