import Link from "next/link"
import type { ReactNode } from "react"

export const metadata = {
  title: "jpdigital AI Receptionist — Privacy Policy",
  description: "How the jpdigital AI Receptionist service handles call and customer data.",
}

const LAST_UPDATED = "June 30, 2026"

export default function AiReceptionistPrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-12">
      <header className="space-y-3">
        <div className="text-xs tracking-wider text-muted-foreground">
          JPDIGITAL AI RECEPTIONIST • PRIVACY POLICY
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          The AI Receptionist service is operated by jpdigital
          (&ldquo;jpdigital,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). With a
          business client&rsquo;s authorization, the service answers that
          business&rsquo;s phone calls, books appointments on their calendar, and
          can send appointment text messages. This policy explains what data the
          service processes, why, and how it is protected.
        </p>
      </section>

      <Section title="OUR ROLE">
        <p>
          The business that subscribes to the service (the &ldquo;Client&rdquo;)
          decides what the assistant does and which of its customers it speaks
          with. For the personal data of <strong>callers</strong> (the
          Client&rsquo;s own customers), the Client is the controller and
          jpdigital acts as a processor on the Client&rsquo;s behalf, handling that
          data only to provide the service. We are the controller of the
          Client&rsquo;s own account and billing information.
        </p>
      </Section>

      <Section title="INFORMATION WE PROCESS">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Client account data</strong> &mdash; business name, contact
            details, and billing information, to set up and bill the service.
          </li>
          <li>
            <strong>Business knowledge base</strong> &mdash; the hours, services,
            pricing, and FAQs you provide for the assistant to answer from.
          </li>
          <li>
            <strong>Caller data</strong> &mdash; when the assistant handles a call:
            the caller&rsquo;s phone number, the name and details they provide, the
            call audio and its transcript, and any appointment details (date,
            time, service, staff).
          </li>
          <li>
            <strong>Messaging data</strong> &mdash; for the optional SMS add-on, the
            recipient&rsquo;s phone number and the confirmation/reminder messages
            sent.
          </li>
        </ul>
      </Section>

      <Section title="HOW CALLS ARE HANDLED">
        <p>
          When a forwarded call is answered, the underlying voice platform
          processes the call in real time and may record and transcribe it to
          operate the service. Information the caller provides is used to answer
          questions, to book or change an appointment on the Client&rsquo;s
          calendar, to transfer the call, or to leave a message for the Client.
          The Client is responsible for any notices or consents required for call
          recording in their jurisdiction.
        </p>
      </Section>

      <Section title="WHY WE PROCESS IT">
        <p>
          To provide and operate the service: answering calls, booking and
          managing appointments, transferring or capturing messages, sending
          confirmations and reminders, supporting Clients, billing, and securing
          and improving the service. We do <strong>not</strong> sell personal
          data, and we do not use caller data for advertising.
        </p>
      </Section>

      <Section title="SERVICE PROVIDERS (SUB-PROCESSORS)">
        <p>
          We rely on a small set of providers to deliver the service, each
          handling data only for that purpose:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Retell AI</strong> &mdash; voice answering, recording, and
            transcription.
          </li>
          <li>
            <strong>Twilio</strong> &mdash; phone numbers, call delivery, and SMS.
          </li>
          <li>
            <strong>Cal.com and your calendar provider</strong> (Google,
            Microsoft, or Apple) &mdash; availability and appointment booking on
            the Client&rsquo;s calendar.
          </li>
          <li>
            <strong>Hosting and infrastructure providers</strong> &mdash; to run
            and secure the service.
          </li>
        </ul>
      </Section>

      <Section title="TEXT MESSAGES">
        <p>
          If the SMS add-on is enabled, customers may receive a booking
          confirmation and a reminder before their appointment, sent on the
          Client&rsquo;s behalf. Message and data rates may apply. Recipients can
          opt out at any time by replying STOP. The Client is responsible for
          having a lawful basis to text its customers.
        </p>
      </Section>

      <Section title="RETENTION">
        <p>
          We keep call records, transcripts, appointment data, and message logs
          only as long as needed to provide the service, support the Client, and
          meet legal, billing, and security obligations, after which they are
          deleted or anonymized. Appointments created on the Client&rsquo;s
          calendar remain in the Client&rsquo;s own account under their control.
        </p>
      </Section>

      <Section title="SECURITY">
        <p>
          We use reasonable technical and organizational measures to protect data
          in transit and at rest and limit access to those who need it. No method
          of transmission or storage is perfectly secure, and we cannot guarantee
          absolute security.
        </p>
      </Section>

      <Section title="YOUR CHOICES & RIGHTS">
        <p>
          Callers who want to access, correct, or delete the information they
          provided should contact the business they called; we will assist that
          business as its processor. Clients can contact us to access, export, or
          delete their account data, subject to legal and billing requirements.
        </p>
      </Section>

      <Section title="CHILDREN">
        <p>
          The service is for businesses and is not directed to children. We do not
          knowingly collect personal data from children.
        </p>
      </Section>

      <Section title="CHANGES TO THIS POLICY">
        <p>
          We may update this policy from time to time. Material changes will be
          reflected by the &ldquo;Last updated&rdquo; date above.
        </p>
      </Section>

      <Section title="CONTACT">
        <p>
          Questions about this policy or your data? Email{" "}
          <a className="underline" href="mailto:hello@jpdigital.studio">
            hello@jpdigital.studio
          </a>
          .
        </p>
      </Section>

      <footer className="border-t border-border pt-8 text-sm">
        <Link className="underline text-muted-foreground" href="/legal/ai-receptionist/terms">
          Terms of Service
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
