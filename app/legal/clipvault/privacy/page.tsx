import Link from "next/link"
import type { ReactNode } from "react"

export const metadata = {
  title: "ClipVault — Privacy Policy",
  description: "How ClipVault handles your data and TikTok account access.",
}

const LAST_UPDATED = "June 24, 2026"

export default function ClipVaultPrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-12">
      <header className="space-y-3">
        <div className="text-xs tracking-wider text-muted-foreground">
          CLIPVAULT • PRIVACY POLICY
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          ClipVault (&ldquo;ClipVault,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
          is a self-hosted tool that, with your explicit authorization, uploads
          and schedules short-form video clips to <strong>your own</strong>{" "}
          TikTok account using TikTok&rsquo;s official Content Posting API. This
          policy explains what data we access, why, and how we protect it.
        </p>
      </section>

      <Section title="INFORMATION WE ACCESS">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Basic TikTok profile</strong> (via the{" "}
            <code>user.info.basic</code> scope): your open ID, display name, and
            avatar — used only to identify which account you connected.
          </li>
          <li>
            <strong>OAuth tokens</strong>: the access and refresh tokens TikTok
            issues when you authorize ClipVault. These let us act on your behalf
            only for the scopes you approve.
          </li>
          <li>
            <strong>Video content you choose to publish</strong>: the clip files
            you direct ClipVault to upload to your account.
          </li>
        </ul>
      </Section>

      <Section title="HOW WE USE IT">
        <p>
          We use this data solely to authenticate you and to upload, schedule,
          and post videos to your own TikTok account at your direction. We do
          not sell your data, use it for advertising, or share it with anyone
          other than TikTok&rsquo;s API to perform the actions you request.
        </p>
      </Section>

      <Section title="STORAGE & SECURITY">
        <p>
          OAuth tokens are <strong>encrypted at rest</strong> and stored on
          private, self-hosted infrastructure. Access to the application is
          restricted behind authentication. We retain your tokens only while
          your account remains connected.
        </p>
      </Section>

      <Section title="DATA SHARING">
        <p>
          The only third party we transmit data to is TikTok, through its
          official APIs, in order to carry out the publishing actions you
          initiate. We use no third-party advertising or analytics trackers.
        </p>
      </Section>

      <Section title="YOUR CHOICES">
        <p>
          You can revoke ClipVault&rsquo;s access at any time from your TikTok
          account settings (Security &amp; permissions &rarr; Manage app
          permissions), or by disconnecting the account within ClipVault. Once
          revoked, the stored tokens are no longer usable and are deleted.
        </p>
      </Section>

      <Section title="RETENTION">
        <p>
          We keep connection data only as long as the account is linked. When
          you disconnect or revoke access, associated tokens are removed.
        </p>
      </Section>

      <Section title="CHILDREN">
        <p>
          ClipVault is not directed to, and may not be used by, anyone under 18.
        </p>
      </Section>

      <Section title="CHANGES">
        <p>
          We may update this policy; material changes will be reflected by the
          &ldquo;Last updated&rdquo; date above.
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
        <Link className="underline text-muted-foreground" href="/legal/clipvault/terms">
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
