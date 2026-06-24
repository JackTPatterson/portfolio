import Link from "next/link"
import type { ReactNode } from "react"

export const metadata = {
  title: "ClipVault — Terms of Service",
  description: "The terms governing your use of ClipVault.",
}

const LAST_UPDATED = "June 24, 2026"

export default function ClipVaultTerms() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-12">
      <header className="space-y-3">
        <div className="text-xs tracking-wider text-muted-foreground">
          CLIPVAULT • TERMS OF SERVICE
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          By connecting a TikTok account to ClipVault or otherwise using the
          service, you agree to these Terms. If you do not agree, do not use
          ClipVault.
        </p>
      </section>

      <Section title="WHAT CLIPVAULT IS">
        <p>
          ClipVault is a self-hosted tool that helps you turn long-form video
          into short vertical clips and publish them to your own TikTok account
          through TikTok&rsquo;s official Content Posting API. ClipVault uploads
          content only to accounts you have connected and authorized.
        </p>
      </Section>

      <Section title="YOUR RESPONSIBILITIES">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You own or fully control the TikTok account(s) you connect.
          </li>
          <li>
            You hold all necessary rights, licenses, or authorizations for any
            content you publish — including clips created under an authorized
            clipping or creator-rewards campaign.
          </li>
          <li>
            Your use complies with TikTok&rsquo;s Terms of Service, Community
            Guidelines, and Developer Terms, and with all applicable laws.
          </li>
          <li>
            You will not use ClipVault to post infringing, deceptive, spam, or
            otherwise prohibited content.
          </li>
        </ul>
      </Section>

      <Section title="ACCOUNT ACCESS">
        <p>
          ClipVault acts only within the OAuth scopes you approve and only on the
          accounts you connect. You may revoke access at any time through your
          TikTok settings or by disconnecting within ClipVault.
        </p>
      </Section>

      <Section title="NO WARRANTY">
        <p>
          ClipVault is provided &ldquo;as is,&rdquo; without warranties of any
          kind. We do not guarantee uninterrupted availability, successful
          publishing, or any particular result. TikTok may change, rate-limit,
          or revoke API access at any time.
        </p>
      </Section>

      <Section title="LIMITATION OF LIABILITY">
        <p>
          To the maximum extent permitted by law, ClipVault and its operator are
          not liable for any indirect, incidental, or consequential damages, or
          for any loss of data, account standing, or revenue arising from your
          use of the service.
        </p>
      </Section>

      <Section title="TERMINATION">
        <p>
          You may stop using ClipVault and disconnect your accounts at any time.
          We may suspend or discontinue the service at our discretion.
        </p>
      </Section>

      <Section title="CONTACT">
        <p>
          Questions? Email{" "}
          <a className="underline" href="mailto:jtpatt03@gmail.com">
            jtpatt03@gmail.com
          </a>
          .
        </p>
      </Section>

      <footer className="border-t border-border pt-8 text-sm">
        <Link className="underline text-muted-foreground" href="/legal/clipvault/privacy">
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
