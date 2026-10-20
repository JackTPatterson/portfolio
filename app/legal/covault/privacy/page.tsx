import { LegalPage, Section } from "../../_components/legal"
import { LAST_UPDATED, PRE_LAUNCH, SIBLINGS } from "../_docs"

export const metadata = {
  title: "Covault — Privacy Policy",
  description: "What Covault collects, why, and who it is shared with.",
}

export default function CovaultPrivacy() {
  return (
    <LegalPage
      eyebrow="COVAULT • PRIVACY POLICY"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      siblings={SIBLINGS}
      intro={<p>{PRE_LAUNCH}</p>}
    >
      <Section title="WHAT WE COLLECT">
        <p>
          Your name and email from Sign in with Apple or Google (the only ways to sign in; Apple may give us a
          private relay address instead of your real email), your account&rsquo;s public addresses, goal
          names, categories and targets, notification preferences, time zone and country, device push tokens,
          app diagnostics (errors, crashes, transaction outcomes, onboarding steps) and subscription status.
          We never collect private keys, seed phrases or passkey secrets &mdash; they never exist on our
          servers.
        </p>
        <p>
          If you join the waitlist we collect the email address you enter, and nothing else.
        </p>
      </Section>

      <Section title="WHAT IS PUBLIC">
        <p>
          Vault balances and transactions are recorded on a public blockchain under your account&rsquo;s
          address. Covault does not publicly link your address to your identity.
        </p>
      </Section>

      <Section title="HOW WE USE IT">
        <p>
          To show your goals, send reminders you opted into, operate the service and improve it. Analytics are
          aggregated and privacy-respecting, with no advertising profiles.
        </p>
      </Section>

      <Section title="AI">
        <p>
          Reminder copy may be generated with Anthropic&rsquo;s Claude. We send only goal name and category,
          amounts and dates &mdash; never your email, address or identifiers. Prompts and outputs are logged
          for quality review.
        </p>
      </Section>

      <Section title="SHARING">
        <p>
          Service providers only (Privy, our on-ramp partner, Expo, an email provider, Anthropic, our analytics
          provider and hosting). We do not sell personal data. Partner offers, if introduced, are opt-in.
        </p>
      </Section>

      <Section title="RETENTION AND DELETION">
        <p>
          You can delete your account; off-chain data is removed within 30 days. On-chain data cannot be
          deleted.
        </p>
      </Section>

      <Section title="CONTACT">
        <p>
          Questions? Email{" "}
          <a className="underline" href="mailto:hello@jpdigital.studio">
            hello@jpdigital.studio
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  )
}
