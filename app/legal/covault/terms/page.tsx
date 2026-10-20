import { LegalPage, Section } from "../../_components/legal"
import { LAST_UPDATED, PRE_LAUNCH, SIBLINGS } from "../_docs"

export const metadata = {
  title: "Covault — Terms of Service",
  description: "The terms for using Covault.",
}

export default function CovaultTerms() {
  return (
    <LegalPage
      eyebrow="COVAULT • TERMS OF SERVICE"
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      siblings={SIBLINGS}
      intro={<p>{PRE_LAUNCH}</p>}
    >
      <Section title="WHAT COVAULT IS">
        <p>
          Covault is software that lets you create savings goals and lock funds in a digital vault that you
          alone control through your own account. Covault is <strong>not a bank</strong>, does not accept
          deposits, does not hold or transmit your funds, and does not provide investment advice.
        </p>
      </Section>
      <Section title="YOUR FUNDS">
        <p>
          Funds are held as USDC in smart contracts deployed on the Base network. Each vault is owned by your
          account. Covault has no ability to move, freeze or unlock funds in any vault.
        </p>
      </Section>
      <Section title="RULES YOU SET">
        <p>
          When you create a goal you choose a lock rule (date, target amount, or whichever comes first) and a
          cooling-off period. These rules are enforced by code and can only be made stricter after creation.
          You can always request an early exit, which releases funds to you after your cooling-off period. No
          fees or penalties apply to early exits.
        </p>
      </Section>
      <Section title="ACCESS AND RECOVERY">
        <p>
          You sign in with your Apple or Google account; no other sign-in method is offered. Moving money is
          protected by passkeys you control and backup methods you choose. Covault cannot recover access on
          your behalf. If you lose all access methods, funds in your vaults cannot be retrieved by Covault.
        </p>
      </Section>
      <Section title="THIRD PARTIES">
        <p>
          Identity verification and fiat purchases are performed by our on-ramp partner under its own terms.
          USDC is issued by Circle under its terms; the issuer may freeze addresses as required by law.
          Sign-in uses Apple or Google, provided through Privy.
        </p>
      </Section>
      <Section title="SUBSCRIPTION">
        <p>
          Premium features are billed in fiat through the app store or card. Subscriptions are never deducted
          from your vaults.
        </p>
      </Section>
      <Section title="NO GUARANTEES">
        <p>
          The software is provided as is. Balances are not insured by the FDIC or any government agency. No
          rate of return is paid or promised. See the{" "}
          <a className="underline" href="/legal/covault/risk">
            Risk Disclosures
          </a>
          .
        </p>
      </Section>
      <Section title="ELIGIBILITY">
        <p>Available only in supported regions; you must be 18 or older.</p>
      </Section>
      <Section title="CHANGES AND TERMINATION">
        <p>
          We may change or discontinue off-chain services. Your vaults and your ability to withdraw or exit do
          not depend on Covault&rsquo;s services.
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
