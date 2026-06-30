import Link from "next/link"
import type { ReactNode } from "react"

export const metadata = {
  title: "jpdigital AI Receptionist — Terms of Service",
  description: "The terms governing the jpdigital AI Receptionist service.",
}

const LAST_UPDATED = "June 30, 2026"

export default function AiReceptionistTerms() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-12">
      <header className="space-y-3">
        <div className="text-xs tracking-wider text-muted-foreground">
          JPDIGITAL AI RECEPTIONIST • TERMS OF SERVICE
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          These Terms govern the AI Receptionist service provided by jpdigital
          (&ldquo;jpdigital,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) to your
          business (&ldquo;you,&rdquo; the &ldquo;Client&rdquo;). By subscribing
          to or using the service, you agree to these Terms. If you do not agree,
          do not use the service.
        </p>
      </section>

      <Section title="WHAT THE SERVICE IS">
        <p>
          The AI Receptionist is a voice assistant that answers phone calls on
          your behalf &mdash; typically the calls your team does not pick up, as
          a replacement for voicemail. It can answer questions, book, reschedule,
          and cancel appointments on your calendar, transfer calls to a person,
          and take messages. An optional add-on sends SMS appointment
          confirmations and reminders. The service is built on third-party
          platforms (see &ldquo;Third-Party Services&rdquo;) and configured for
          your business.
        </p>
      </Section>

      <Section title="ELIGIBILITY & BUSINESS USE">
        <p>
          The service is provided to businesses for business purposes. You confirm
          you are authorized to act for the Client and to provide the access and
          information needed to set up the service.
        </p>
      </Section>

      <Section title="FEES & BILLING">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The AI Receptionist is <strong>$397 per month</strong>, billed
            monthly. The optional SMS reminders add-on is{" "}
            <strong>$49 per month</strong>. There is no setup fee.
          </li>
          <li>
            Plans are <strong>month-to-month</strong> with no minimum term unless
            separately agreed in writing. Fees are billed in advance for each
            monthly period and are non-refundable for the current period.
          </li>
          <li>
            Prices exclude any applicable taxes. We may change pricing on renewal
            with reasonable advance notice.
          </li>
          <li>
            The flat fee includes a generous monthly call-volume allowance that
            covers normal use. If usage materially exceeds that allowance, we may
            discuss a fair adjustment with you before any change to your bill.
          </li>
        </ul>
      </Section>

      <Section title="YOUR RESPONSIBILITIES">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You provide accurate business information (hours, services, pricing,
            FAQs) for the assistant, and the calendar and transfer destinations it
            should use.
          </li>
          <li>
            You configure, or authorize us to configure, call-forwarding with your
            phone carrier. You remain the owner of your phone number, calendar, and
            customer relationships.
          </li>
          <li>
            You use the service lawfully and do not use it for unlawful,
            deceptive, harassing, or prohibited communications.
          </li>
          <li>
            You are responsible for obtaining any consents and providing any
            notices required for your customers (see &ldquo;Call Recording &amp;
            Messaging&rdquo;).
          </li>
        </ul>
      </Section>

      <Section title="CALL RECORDING & MESSAGING (YOUR COMPLIANCE)">
        <p>
          Calls handled by the assistant may be recorded and transcribed by the
          underlying voice platform to operate and improve the service. SMS
          confirmations and reminders are sent to phone numbers captured during a
          booking. As the business interacting with your customers, you are the
          party responsible for compliance with applicable laws &mdash; including
          call-recording and two-party-consent laws, and text-messaging and
          consent laws such as the TCPA and carrier (A2P 10DLC) requirements.
          Recipients can opt out of texts at any time by replying STOP. This is
          not legal advice; consult your own counsel about your obligations.
        </p>
      </Section>

      <Section title="THIRD-PARTY SERVICES">
        <p>
          The service runs on third-party platforms &mdash; including Retell AI
          (voice), Twilio (telephony/SMS), Cal.com and your calendar provider
          (Google, Microsoft, or Apple), and our hosting providers. Your use is
          also subject to those providers&rsquo; terms. We are not responsible for
          the acts, outages, pricing, or changes of third-party providers, and a
          third-party change may require us to adjust or discontinue a feature.
        </p>
      </Section>

      <Section title="AVAILABILITY & FALLBACK">
        <p>
          The service is designed to fail safe: it sits behind your existing
          phone, so if the assistant is ever unavailable, calls revert to your own
          line and voicemail, just as before the service was added. We provide the
          service on a commercially reasonable, best-effort basis and do not
          guarantee uninterrupted availability, successful booking of every call,
          or delivery of every message.
        </p>
      </Section>

      <Section title="NO WARRANTY">
        <p>
          The service is provided &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, express or implied,
          including merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </Section>

      <Section title="LIMITATION OF LIABILITY">
        <p>
          To the maximum extent permitted by law, jpdigital and its operator are
          not liable for any indirect, incidental, special, or consequential
          damages, or for lost revenue, missed appointments, lost bookings, or
          lost data, arising from your use of or inability to use the service. Our
          total liability for any claim is limited to the fees you paid for the
          service in the three months before the claim.
        </p>
      </Section>

      <Section title="CANCELLATION & TERMINATION">
        <p>
          You may cancel at any time by emailing{" "}
          <a className="underline" href="mailto:hello@jpdigital.studio">
            hello@jpdigital.studio
          </a>
          . Service ends at the close of your current billing period and you are
          not billed again; we remove the call-forwarding and your calls return to
          your normal line and voicemail. We may suspend or discontinue the
          service, or terminate for breach of these Terms, at our discretion.
        </p>
      </Section>

      <Section title="CHANGES TO THESE TERMS">
        <p>
          We may update these Terms from time to time. Material changes will be
          reflected by the &ldquo;Last updated&rdquo; date above; continued use
          after a change means you accept the updated Terms.
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

      <footer className="border-t border-border pt-8 text-sm">
        <Link className="underline text-muted-foreground" href="/legal/ai-receptionist/privacy">
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-8 space-y-3">
      <div className="text-xs tracking-wider text-muted-foreground">{title}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </section>
  )
}
