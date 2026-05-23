import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Pactor",
  description:
    "Terms governing your use of Pactor — a private, invite-only app for friend-to-friend prediction pools.",
}

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
      <header className="space-y-2 mb-12">
        <div className="text-xs tracking-wider text-muted-foreground">
          LEGAL
        </div>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
          Terms of Service
        </h1>
        <div className="text-sm text-muted-foreground">
          Effective 2026-05-23
        </div>
      </header>

      <div className="prose-pactor space-y-10">
        <Section title="1. What Pactor is">
          <P>
            Pactor is a mobile application that lets people create and join
            private wagering "pools" with their friends. Every pool is created
            by one user and is joinable <B>only by people that user invites
            directly</B>. There is no public marketplace, no discovery feed,
            no browse view, and no way for the general public to find or join
            a pool.
          </P>
          <P>
            Pactor is <B>not</B> a public prediction market, daily-fantasy
            sports platform, sportsbook, brokerage, casino, or regulated
            gambling product. Pactor does not facilitate wagering with
            strangers, set odds, take a percentage of any wager, or act as
            counterparty to any pool.
          </P>
        </Section>

        <Section title="2. Eligibility">
          <P>
            You must be at least 18 years old (or the legal age of majority in
            your jurisdiction, whichever is older) and legally permitted to
            transact in USDC and use the Base blockchain network in the
            jurisdiction where you reside. You are solely responsible for
            ensuring that your use of Pactor is lawful where you live.
          </P>
          <P>
            By creating an account you represent that your participation in
            private wagering pools is lawful in your state and country. Pactor
            may restrict access from jurisdictions whose laws are incompatible
            with the app's operation; you must not attempt to circumvent
            those restrictions.
          </P>
        </Section>

        <Section title="3. Non-custodial settlement">
          <P>
            Pools are settled on-chain in USDC on the Base network using
            audited open-source smart contracts.{" "}
            <B>Pactor never holds, transfers, or takes custody of user
            funds.</B>{" "}
            Funds entering a pool are locked in an on-chain escrow contract
            until the pool resolves, at which point the contract pays winners
            directly to their non-custodial wallet.
          </P>
          <P>
            Because settlement is fully on-chain and Pactor has no
            administrative control over the deployed contracts, Pactor{" "}
            <B>cannot</B> freeze your funds, reverse a transaction, refund a
            wager, recover funds sent to a wrong address, or otherwise
            interfere with a pool once it is on-chain. You are solely
            responsible for the wallet you use with Pactor and for the
            consequences of every transaction you initiate.
          </P>
        </Section>

        <Section title="4. Fees">
          <P>
            Pactor charges a flat USDC fee to the creator of a pool at the
            time of creation. Pactor does <B>not</B> take a percentage of
            wagers, stakes, winnings, transaction volume, or any other amount
            that moves through the settlement contracts. The fee is fixed in
            the deployed contracts and cannot be changed silently.
          </P>
        </Section>

        <Section title="5. Resolution and dispute handling">
          <P>
            At pool creation, the creator designates one or more "resolvers"
            chosen from the pool's invited participants. Resolvers are
            responsible for proposing the outcome after the underlying event.
            The on-chain contract enforces a challenge window during which
            participants can dispute a proposal.
          </P>
          <P>
            Pactor is <B>not</B> an arbiter, oracle, referee, or judge of
            outcomes. Resolution authority lives with the group, never with
            the platform. Pactor will not mediate disputes between
            participants and has no obligation to interpret evidence or take
            sides.
          </P>
        </Section>

        <Section title="6. Wallets and third parties">
          <P>
            Wallets are provided by Privy, an embedded-wallet provider. The
            private key is held in your device's Secure Enclave or via Privy's
            threshold-signature service; Pactor never sees it. You are
            responsible for safeguarding access to your account and wallet.
          </P>
          <P>
            Optional fiat onramp is provided by Stripe Crypto Onramp and
            Coinbase. Those providers have their own terms and conduct their
            own identity verification when you fund a wallet from a bank or
            card.
          </P>
        </Section>

        <Section title="7. No advice; no warranty">
          <P>
            Pactor is provided "as is" without warranty of any kind, express
            or implied. Nothing in the app constitutes financial, investment,
            tax, or legal advice. Smart contracts, blockchain infrastructure,
            and third-party services (wallet providers, RPC providers,
            payment-onramp providers) can fail, be exploited, or become
            unavailable. You assume all risk of loss.
          </P>
          <P>
            To the maximum extent permitted by law, Pactor disclaims all
            liability for indirect, incidental, consequential, special,
            exemplary, or punitive damages arising from your use of the app
            or from any pool you participate in.
          </P>
        </Section>

        <Section title="8. Acceptable use">
          <P>You agree not to use Pactor to:</P>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>
              Conduct or facilitate any wagering activity that is unlawful in
              your jurisdiction or the jurisdiction of any participant.
            </li>
            <li>
              Run public-facing wagering markets, bookmaking, or take wagers
              from people outside your personal network.
            </li>
            <li>
              Impersonate another person or misrepresent your identity, age,
              or location.
            </li>
            <li>
              Use the app to launder money, finance illegal activity, or
              evade economic sanctions.
            </li>
            <li>
              Interfere with the operation of the app, the smart contracts,
              or other users' accounts.
            </li>
          </ul>
        </Section>

        <Section title="9. Termination">
          <P>
            Pactor may suspend or terminate access to the app at any time, for
            any reason, with or without notice. On-chain balances are
            unaffected by account termination — your wallet always retains
            access to any pool you participated in regardless of your account
            status.
          </P>
        </Section>

        <Section title="10. Changes to these terms">
          <P>
            Pactor may update these terms from time to time. Material changes
            will be surfaced in the app at next launch. Your continued use of
            the app after the effective date of an update constitutes
            acceptance of the revised terms.
          </P>
        </Section>

        <Section title="11. Governing law and disputes">
          <P>
            These terms are governed by the laws of the State of New Jersey,
            without regard to its conflict-of-laws principles. Any dispute
            between you and Pactor arising out of these terms or your use of
            the app will be resolved by binding individual arbitration, not in
            court, and not as part of a class action. You waive any right to
            participate in a class action against Pactor.
          </P>
        </Section>

        <Section title="12. Contact">
          <P>
            Questions about these terms:{" "}
            <a
              className="text-foreground underline hover:opacity-80"
              href="mailto:legal@pactor.app"
            >
              legal@pactor.app
            </a>
          </P>
        </Section>

        <div className="border border-border rounded-lg p-5 text-xs text-muted-foreground italic leading-relaxed mt-12">
          This document is a working draft maintained by the Pactor team.
          Before broad public release the final wording is being reviewed by
          counsel familiar with cryptocurrency, payments, and gaming
          regulation in the jurisdictions where Pactor users live. Sections
          may change between now and general availability.
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
