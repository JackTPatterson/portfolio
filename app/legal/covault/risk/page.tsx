import { LegalPage, Section } from "../../_components/legal"
import { LAST_UPDATED, PRE_LAUNCH, SIBLINGS } from "../_docs"

export const metadata = {
  title: "Covault — Risk Disclosures",
  description: "What to know before using Covault: it is not a bank and balances are not FDIC-insured.",
}

export default function CovaultRisk() {
  return (
    <LegalPage
      eyebrow="COVAULT • RISK DISCLOSURES"
      title="Risk Disclosures"
      lastUpdated={LAST_UPDATED}
      siblings={SIBLINGS}
      intro={<p>{PRE_LAUNCH}</p>}
    >
      <Section title="NOT A BANK">
        <p>
          Covault is not a bank. Your balances are not bank deposits and are <strong>not FDIC-insured</strong>.
        </p>
      </Section>
      <Section title="DIGITAL DOLLARS">
        <p>
          Balances are held as USDC, a digital dollar issued by Circle. USDC is designed to hold a value of one
          US dollar but is not guaranteed; the issuer could fail or, in rare legal cases, freeze an address.
        </p>
      </Section>
      <Section title="YOU CONTROL YOUR MONEY">
        <p>
          Funds sit in a vault only your account can access. Covault cannot move, freeze or unlock them
          &mdash; and cannot recover them if you lose all your access methods. Set up a backup passkey.
        </p>
      </Section>
      <Section title="NO INTEREST, NO RETURNS">
        <p>This version pays no interest and makes no promise of growth.</p>
      </Section>
      <Section title="LOCKS ARE REAL">
        <p>
          Rules you set are enforced by code and can only be made stricter. You can always request an early
          exit, released after your cooling-off period.
        </p>
      </Section>
      <Section title="TECHNOLOGY RISK">
        <p>
          Software and networks can have bugs or outages. Contracts are audited before any real money is
          supported; until then this is a test network with no real funds.
        </p>
      </Section>
      <Section title="FEES">
        <p>
          Covault does not charge fees on your vault. Our on-ramp partner may charge for card or bank
          purchases.
        </p>
      </Section>
    </LegalPage>
  )
}
