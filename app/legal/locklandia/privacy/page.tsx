import { LegalPage, Section } from "../../_components/legal"

export const metadata = {
  title: "Locklandia — Privacy Policy",
  description:
    "What Locklandia keeps on your phone, what it sends to our server when you sign in, who else processes it, and how to delete it.",
}

const LAST_UPDATED = "September 25, 2026"

const SIBLINGS = [
  { href: "/legal/locklandia/terms", label: "Terms of Sale & Service" },
  { href: "/legal/locklandia/returns", label: "Returns & Refunds" },
]

export default function LocklandiaPrivacy() {
  return (
    <LegalPage
      eyebrow="LOCKLANDIA • PRIVACY POLICY"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      siblings={SIBLINGS}
      intro={
        <>
          <p>
            Locklandia works without an account, and most of what it does
            happens only on your phone. Signing in adds friends, the
            leaderboard, lock-in alerts and Plus, and those need a server we
            run. This page explains what that server receives, why, and how to
            delete it.
          </p>
        </>
      }
    >
      <Section title="WHAT STAYS ON YOUR PHONE">
        <p>
          Your blocks, modes, schedules, streak, session history and the notes
          you write when you end a block early are stored on the device. They
          leave it only if you turn on account sync (see below). Deleting the
          app deletes them.
        </p>
        <p>
          If you use a keyholder, the shared code is generated on your device
          and handed to them directly. The secret behind it is never uploaded,
          so we cannot generate your codes and cannot unlock your blocks.
        </p>
      </Section>

      <Section title="WHAT WE NEVER SEE">
        <p>
          Which apps and websites you block, and how long you spend in each
          app. On iOS you choose apps through Apple&apos;s Screen Time picker,
          which gives the app opaque tokens instead of names. Apple keeps that
          list private, including from us. Friends see how long you&apos;re
          locked in for, never what&apos;s blocked or why.
        </p>
      </Section>

      <Section title="IF YOU SIGN IN">
        <p>
          You sign in with Apple. We receive an Apple identifier, and an email
          address if you choose to share one (it may be Apple&apos;s private
          relay address). We store a display name and, if you pick one, a
          public handle.
        </p>
        <p>What the server stores depends on what you use:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Friends and alerts.</strong> Your friends list, invites,
            and whether you share or receive lock-in and badge alerts. When you
            lock in, we tell your friends how long for.
          </li>
          <li>
            <strong>Leaderboard.</strong> Your handle, your time zone offset,
            and the start time and length of each focus session, used to rank
            you. You choose whether you appear on the global board. Leaving the
            leaderboard deletes that history.
          </li>
          <li>
            <strong>Profile photo.</strong> If you add one, it&apos;s shown
            wherever your name is, including the public leaderboard. Every
            photo is checked for explicit, violent or offensive content before
            anyone else can see it (see &ldquo;Who else processes data&rdquo;).
            If the check can&apos;t run, the photo stays hidden.
          </li>
          <li>
            <strong>Squads, challenges and habit checks.</strong> Your daily
            screen-time total in minutes, only if you turn on sharing (it&apos;s
            off by default), and the challenges and requests you send or
            answer.
          </li>
          <li>
            <strong>Accountability and Plus features.</strong> Your partners,
            unlock requests and their answers, weekly focus totals you share,
            and private leaderboards you run or join.
          </li>
          <li>
            <strong>Your devices.</strong> An install identifier for each
            device and, if you allow notifications, its push token. When you
            pair a Mac, we store which block is running (its name, symbol,
            strictness and times) so your other device can show it.
          </li>
          <li>
            <strong>Account sync.</strong> If you turn it on, a copy of your app
            data (including earned badges) so your other devices can read it.
          </li>
          <li>
            <strong>Purchases.</strong> The App Store transaction details Apple
            sends us for Plus (product, dates, renewal and refund status), and
            simple paywall events, such as opening it or cancelling a purchase,
            so we can tell whether Plus is working. We never see your payment
            card.
          </li>
          <li>
            <strong>Referrals.</strong> Who invited whom, and the install
            identifier used, so a reward is paid once.
          </li>
          <li>
            <strong>Reports and blocks.</strong> Reports you make or receive,
            and who you&apos;ve blocked, so we can act on them.
          </li>
        </ul>
        <p>
          We use this only to run those features and keep them safe. We do
          not sell it, do not use it for advertising, and do not track you
          across other apps or websites.
        </p>
      </Section>

      <Section title="CHILDREN">
        <p>
          Locklandia&apos;s online features are for people aged 13 and over. We
          don&apos;t ask your age. Where Apple&apos;s Declared Age Range says
          someone is under 13, the app stays local-only. There&apos;s no
          account, no friends, no leaderboard, no photos, and no Plus or card
          purchase, so nothing about them reaches our server. If you believe a
          child under 13 has an account, email us and we will delete it.
        </p>
      </Section>

      <Section title="IF YOU BUY A CARD">
        <p>
          Cards are sold on our website, and Stripe handles payment. Your card
          details go to Stripe and never touch our servers. We receive only
          confirmation that payment succeeded, your email address and the
          delivery address you gave.
        </p>
        <p>
          We keep the delivery address to post the card and to answer
          questions about the order afterwards. We do not use it for marketing
          and do not sell it.
        </p>
      </Section>

      <Section title="WHO ELSE PROCESSES DATA">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Apple</strong>: Sign in with Apple, App Store purchases and
            subscriptions, and push notifications.
          </li>
          <li>
            <strong>Sightengine</strong>: automated checks on profile photos.
            They receive the photo only, never your name or account.
          </li>
          <li>
            <strong>Stripe</strong>: card payments and delivery addresses.
          </li>
          <li>
            <strong>Fly.io and Supabase</strong>: our server and database
            hosting, in the United States.
          </li>
        </ul>
        <p>
          Each processes data only to provide its service to us.
        </p>
      </Section>

      <Section title="HOW LONG WE KEEP IT">
        <p>
          For as long as your account exists. Notifications we couldn&apos;t
          deliver are dropped once they&apos;re out of date. Deleting your account deletes its data straight away, apart
          from purchase and order records we must keep for accounting, tax or
          fraud prevention, which have your account removed from them.
        </p>
      </Section>

      <Section title="DELETING YOUR ACCOUNT AND YOUR RIGHTS">
        <p>
          Delete your account in the app under Settings &rarr; Delete account.
          This removes your account, friends, photo, leaderboard history,
          partnerships, synced data and devices, and revokes Locklandia&apos;s
          Sign in with Apple access. It does not cancel a subscription. Do
          that in your Apple account settings.
        </p>
        <p>
          You can also email us to get a copy of what we hold, to correct it,
          or to have it deleted. If you are in the UK or EU you can complain to
          your data protection authority. If you are in California you have
          the same rights under the CCPA, and we do not sell or share personal
          information as it defines those terms.
        </p>
      </Section>

      <Section title="CHANGES">
        <p>
          If this policy changes, we&apos;ll update the date at the top. If
          it&apos;s a significant change, we&apos;ll also tell you in the app.
        </p>
      </Section>

      <Section title="CONTACT">
        <p>
          Email{" "}
          <a className="underline" href="mailto:hello@jpdigital.studio">
            hello@jpdigital.studio
          </a>
          . Locklandia is made by JPX Software.
        </p>
      </Section>
    </LegalPage>
  )
}
