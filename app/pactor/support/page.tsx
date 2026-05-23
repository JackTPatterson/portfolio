import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support — Pactor",
  description: "How to reach Pactor and what we can help with.",
}

export default function SupportPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
      <header className="space-y-2 mb-12">
        <div className="text-xs tracking-wider text-muted-foreground">
          SUPPORT
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Support
        </h1>
        <div className="text-sm text-muted-foreground">
          We read every email. Response times under 48 hours on weekdays.
        </div>
      </header>

      <div className="space-y-12">
        <Section title="Get in touch">
          <Card
            label="General support"
            email="support@pactor.app"
            note="Account issues, login problems, push notifications, anything app-related."
          />
          <Card
            label="Privacy"
            email="privacy@pactor.app"
            note="Data export, deletion requests, CCPA/GDPR requests."
          />
          <Card
            label="Legal"
            email="legal@pactor.app"
            note="Questions about the Terms of Service or licensing."
          />
        </Section>

        <Section title="What we can and can't help with">
          <Group title="✓ We can help with">
            <ul className="list-disc pl-6 space-y-1.5 text-base leading-relaxed text-muted-foreground">
              <li>Account access, sign-in, and identity issues.</li>
              <li>App crashes and bugs.</li>
              <li>Push notification settings and delivery.</li>
              <li>Friend invites that don't arrive.</li>
              <li>Pool creation problems.</li>
              <li>Data export and account deletion requests.</li>
            </ul>
          </Group>
          <Group title="✗ We can't help with">
            <ul className="list-disc pl-6 space-y-1.5 text-base leading-relaxed text-muted-foreground">
              <li>
                Reversing or refunding an on-chain transaction. Settlement is
                fully on-chain and Pactor has no admin control over the
                deployed contracts.
              </li>
              <li>
                Recovering funds sent to a wrong address. Verify every
                recipient address before confirming a transaction.
              </li>
              <li>
                Mediating disputes between pool participants. Resolution
                authority lives with the resolvers designated by the pool
                creator, never with Pactor.
              </li>
              <li>
                Recovering your wallet if you lose access to both your email
                and your device. Privy controls the recovery flow; contact
                them directly at{" "}
                <a
                  className="text-foreground underline hover:opacity-80"
                  href="https://privy.io"
                >
                  privy.io
                </a>
                .
              </li>
            </ul>
          </Group>
        </Section>

        <Section title="Status">
          <P>
            Pactor is in private beta. Active testers are invited individually
            and the app is not publicly available on the App Store at this
            time.
          </P>
        </Section>
      </div>
    </article>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-medium text-foreground">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-muted-foreground">
      {children}
    </p>
  )
}

function Group({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-foreground">{title}</div>
      {children}
    </div>
  )
}

function Card({
  label,
  email,
  note,
}: {
  label: string
  email: string
  note: string
}) {
  return (
    <a
      href={`mailto:${email}`}
      className="block border border-border rounded-lg p-5 hover:border-muted-foreground/50 transition-colors"
    >
      <div className="text-xs tracking-wider text-muted-foreground">
        {label.toUpperCase()}
      </div>
      <div className="text-base font-medium text-foreground mt-1">
        {email}
      </div>
      <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
        {note}
      </div>
    </a>
  )
}
