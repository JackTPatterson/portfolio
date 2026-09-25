import { LegalPage, Section } from "../../_components/legal"

export const metadata = {
  title: "Locklandia — Terms of Sale & Service",
  description:
    "The terms for using the free app and its social features, subscribing to Plus, and buying a Locklandia card.",
}

const LAST_UPDATED = "September 25, 2026"

const SIBLINGS = [
  { href: "/legal/locklandia/privacy", label: "Privacy Policy" },
  { href: "/legal/locklandia/returns", label: "Returns & Refunds" },
]

export default function LocklandiaTerms() {
  return (
    <LegalPage
      eyebrow="LOCKLANDIA • TERMS OF SALE & SERVICE"
      title="Terms of Sale & Service"
      lastUpdated={LAST_UPDATED}
      siblings={SIBLINGS}
      intro={
        <p>
          These terms cover using the free app and its social features,
          subscribing to Plus, and buying a card. You can do any one without
          the others. By using Locklandia you agree to them. If you got the app
          from the App Store, Apple&apos;s standard licence agreement also
          applies.
        </p>
      }
    >
      <Section title="THE APP">
        <p>
          The app is free and stays free for everything that runs on your
          phone: blocking, modes, schedules, keyholders by code, card pairing,
          badges and your full history. It also stays free to have friends,
          send and receive lock-in alerts, and appear on the weekly leaderboard.
          We are not going to move any of that behind a paywall later.
        </p>
      </Section>

      <Section title="YOUR ACCOUNT">
        <p>
          An account is optional. It&apos;s needed for friends, the
          leaderboard, photos and Plus, and you create one with Sign in with
          Apple. The online features are for people aged 13 and over. You
          are responsible for what happens on your account, so keep your
          Apple ID secure.
        </p>
        <p>
          You can delete your account at any time in Settings. We may suspend
          or delete an account that breaks the community rules below.
        </p>
      </Section>

      <Section title="COMMUNITY RULES">
        <p>
          Some things you add can be seen by others: your handle, your display
          name, your profile photo, and the names of groups and habit checks.
          We have zero tolerance for objectionable content or abusive users.
          You must not post or send anything that:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>is sexual, nude or sexually suggestive, or involves a minor in any way;</li>
          <li>is violent, gory, or promotes self-harm;</li>
          <li>harasses, threatens, bullies or impersonates anyone;</li>
          <li>is hateful towards a person or group;</li>
          <li>shares someone&apos;s contact details or other private information; or</li>
          <li>is spam, advertising, or breaks the law.</li>
        </ul>
        <p>
          Every profile photo is checked automatically before anyone else can
          see it. You can report or block anyone from their profile. We review
          reports within 24 hours. We remove content that breaks these rules,
          and we remove the people who post it. We may report illegal content,
          especially anything involving a child, to the authorities.
        </p>
        <p>
          You keep ownership of what you post. You give us permission to store
          it and to show it to other users as the features describe, and only
          for as long as you keep it on Locklandia.
        </p>
      </Section>

      <Section title="PLUS">
        <p>
          Plus is an optional subscription for features that need a server we
          run:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>live keyholder approvals;</li>
          <li>starting private leaderboards;</li>
          <li>showing friends your whole badge collection;</li>
          <li>keeping badges on your account across devices;</li>
          <li>shared weekly goals; and</li>
          <li>weekly focus reports.</li>
        </ul>
        <p>
          Plus is billed through the App Store and renews automatically at the
          price shown before you buy, until you cancel. You can cancel at any
          time in your Apple account settings, at least 24 hours before the
          current period ends. If you take a free trial, you are charged when
          it ends unless you cancel before then. Apple handles refunds.
        </p>
        <p>
          If Plus lapses, nothing about your blocking changes and your card
          keeps working. You lose only the connected features, and a private
          leaderboard you started keeps running.
        </p>
      </Section>

      <Section title="THE CARD">
        <p>
          The Locklandia card is sold outright on our website for the price
          shown at checkout. Once it&apos;s yours it keeps working. It is a
          passive NFC tag with no battery and no expiry, and it needs no
          subscription. We can only switch one off after a chargeback, or when
          we issue a replacement for a lost card.
        </p>
        <p>
          Registering a card to an account is optional. It stops the same
          card being claimed by two people.
        </p>
      </Section>

      <Section title="WHAT LOCKLANDIA DOES NOT PROMISE">
        <p>
          Locklandia adds friction. It does not make your phone impossible to
          use. You can uninstall the app, turn off Screen Time, or ignore the
          card, and nothing here prevents that. If a block failing would cause
          you real harm, do not rely on this app.
        </p>
        <p>
          Locklandia is not a medical device and is not treatment for any
          condition. It does not diagnose anything, and it is not a substitute
          for professional help.
        </p>
      </Section>

      <Section title="AVAILABILITY">
        <p>
          The connected features depend on our servers and on Apple&apos;s. We
          aim to keep them running but cannot guarantee uninterrupted service.
          When they are unreachable, the app keeps working locally instead of
          locking you out.
        </p>
      </Section>

      <Section title="LIABILITY">
        <p>
          Nothing here limits liability for death or personal injury caused by
          negligence, for fraud, or for anything else that the law does not
          let us exclude. Otherwise, our liability for the app is limited to
          what you have paid us, and for the card to its purchase price.
        </p>
        <p>
          If you are a consumer, your statutory rights are unaffected by
          anything on this page.
        </p>
      </Section>

      <Section title="CHANGES">
        <p>
          If these terms change, we&apos;ll update the date at the top. If
          it&apos;s a significant change, we&apos;ll also tell you in the app.
        </p>
      </Section>

      <Section title="WHO YOU ARE CONTRACTING WITH">
        <p>
          Locklandia is made by JPX Software. Email{" "}
          <a className="underline" href="mailto:hello@jpdigital.studio">
            hello@jpdigital.studio
          </a>
          . For card orders, the trading entity and registered address are
          also shown at checkout and on your receipt.
        </p>
      </Section>
    </LegalPage>
  )
}
