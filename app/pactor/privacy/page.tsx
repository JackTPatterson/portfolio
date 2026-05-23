import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Pactor",
  description:
    "What Pactor collects, where it goes, and how to delete it.",
}

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
      <header className="space-y-2 mb-12">
        <div className="text-xs tracking-wider text-muted-foreground">
          LEGAL
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Privacy Policy
        </h1>
        <div className="text-sm text-muted-foreground">
          Effective 2026-05-23
        </div>
      </header>

      <div className="space-y-10">
        <Section title="What we collect">
          <P>
            <B>Account &amp; profile.</B> When you sign in with email or
            phone, we store the address you provided, a username and display
            name you choose, and the public address of the wallet your
            authentication provider creates for you. Stored in our Supabase
            database.
          </P>
          <P>
            <B>Wallet.</B> Your wallet is created and held by Privy, a
            third-party embedded-wallet provider. The private key never leaves
            Privy's secure enclave or your device; Pactor never sees it. We
            store only your public wallet address.
          </P>
          <P>
            <B>Pool activity.</B> Pools you create, invitations you send or
            receive, your positions, on-chain transaction hashes, and the
            resolution evidence you attach to a pool you resolve. All gated by
            row-level security to the people invited to that pool.
          </P>
          <P>
            <B>Device tokens.</B> If you enable push notifications, we store
            an Expo push token associated with your account so we can deliver
            notifications. Disable push in settings to delete the token.
          </P>
          <P>
            <B>Optional crash reports.</B> If you opt in, Sentry receives
            stack traces and device metadata for crash debugging. Off by
            default.
          </P>
        </Section>

        <Section title="How we use it">
          <P>
            We use the data above strictly to operate Pactor — sync state
            across your devices, deliver invites and notifications, render
            your activity feed, and read your on-chain pool balances. We do
            not sell, rent, or share personal data with advertisers or
            analytics brokers.
          </P>
        </Section>

        <Section title="Third parties we transmit data to">
          <P>
            <B>Privy</B> (privy.io) — embedded wallet provider. Receives your
            email or phone for sign-in and creates and holds your wallet key.
          </P>
          <P>
            <B>Supabase</B> (supabase.com) — database and authentication
            backend. Stores your profile, pools, friendships, and
            notifications.
          </P>
          <P>
            <B>Expo Push</B> (expo.dev) — push notification delivery.
            Receives the push token and the notification payload at delivery
            time.
          </P>
          <P>
            <B>Base RPC providers</B> (Alchemy or equivalent) — used to read
            from and submit transactions to the Base network. Receives RPC
            requests tied to your wallet address.
          </P>
          <P>
            <B>Coinbase &amp; Stripe</B> (optional, only if you use the
            in-app onramp) — receive identity and payment information needed
            to buy USDC and route it to your wallet.
          </P>
        </Section>

        <Section title="On-chain data is public">
          <P>
            Transactions on the Base network — including the wallet address
            you use, the pools you join, and the amounts you stake — are
            publicly visible on-chain. This is a property of every public
            blockchain, not of Pactor specifically. Keep a separate wallet for
            Pactor activity if you want a clean transaction graph.
          </P>
        </Section>

        <Section title="Data retention and deletion">
          <P>
            We retain your profile and pool history while your account is
            active. Email{" "}
            <a
              className="text-foreground underline hover:opacity-80"
              href="mailto:privacy@pactor.app"
            >
              privacy@pactor.app
            </a>{" "}
            to request export or deletion of your account-level data. On-chain
            transactions cannot be deleted — the blockchain is immutable.
          </P>
        </Section>

        <Section title="Children">
          <P>
            Pactor is for users 18 and older. We do not knowingly collect data
            from minors. If you believe we have, email{" "}
            <a
              className="text-foreground underline hover:opacity-80"
              href="mailto:privacy@pactor.app"
            >
              privacy@pactor.app
            </a>{" "}
            and we will delete it.
          </P>
        </Section>

        <Section title="Your rights">
          <P>
            Depending on where you live (e.g. California under CCPA, EU under
            GDPR), you may have specific rights to access, correct, port, or
            delete your personal data, and to opt out of sale or sharing.
            Pactor does not sell or share personal data with third parties for
            advertising. To exercise any of these rights, email{" "}
            <a
              className="text-foreground underline hover:opacity-80"
              href="mailto:privacy@pactor.app"
            >
              privacy@pactor.app
            </a>{" "}
            from the email associated with your account.
          </P>
        </Section>

        <Section title="Contact">
          <P>
            Privacy questions:{" "}
            <a
              className="text-foreground underline hover:opacity-80"
              href="mailto:privacy@pactor.app"
            >
              privacy@pactor.app
            </a>
          </P>
        </Section>

        <div className="border border-border rounded-lg p-5 text-xs text-muted-foreground italic leading-relaxed mt-12">
          This document is a working draft maintained by the Pactor team.
          Before broad public release the final wording is being reviewed by
          counsel familiar with GDPR, CCPA, and crypto-specific privacy
          regulation in the jurisdictions where Pactor users live.
        </div>
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
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-foreground font-medium">{children}</strong>
}
