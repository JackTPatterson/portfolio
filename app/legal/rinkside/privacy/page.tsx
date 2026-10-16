import { LegalPage, Section } from "../../_components/legal"

export const metadata = {
  title: "Rinkside — Privacy Policy",
  description: "How the Rinkside hockey app handles your data: no accounts, no tracking, everything stays on your phone.",
}

const LAST_UPDATED = "October 16, 2026"

export default function RinksidePrivacy() {
  return (
    <LegalPage
      eyebrow="RINKSIDE • PRIVACY POLICY"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      siblings={[{ href: "/legal/rinkside/privacy", label: "Privacy Policy" }]}
      intro={
        <p>
          Rinkside is an NHL scores, stats and analytics app for iPhone, made by Jack Patterson
          (jpdigital, &ldquo;we,&rdquo; &ldquo;us&rdquo;). This policy explains what the app does
          and doesn&rsquo;t do with your information. The short version: Rinkside has no accounts,
          collects no personal data, and keeps your settings on your phone.
        </p>
      }
    >
      <Section title="WHAT WE COLLECT">
        <p>
          Nothing. Rinkside has no sign-in, no analytics, no advertising and no tracking. We
          don&rsquo;t receive, store or sell any information about you or how you use the app.
        </p>
      </Section>

      <Section title="WHAT STAYS ON YOUR PHONE">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Your favourite team</strong> and other app settings.
          </li>
          <li>
            <strong>Cached stats</strong> &mdash; recent scores, standings and similar public data,
            so the app opens quickly and works offline.
          </li>
        </ul>
        <p>
          This data never leaves your device. You can clear the cache at any time in Settings, and
          deleting the app removes all of it.
        </p>
      </Section>

      <Section title="THIRD-PARTY DATA SOURCES">
        <p>
          To show scores and stats, the app requests public hockey data directly from the services
          below. Like any website you visit, these services receive standard request information
          (such as your IP address and device type) and handle it under their own privacy policies.
          The app sends them no personal information about you.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>NHL</strong> (nhl.com, api-web.nhle.com, api.nhle.com) &mdash; schedules, scores,
            stats, NHL Edge tracking, TV listings, highlight video and team radio streams.
          </li>
          <li>
            <strong>MoneyPuck</strong> (moneypuck.com) &mdash; predictions, expected goals and playoff
            odds.
          </li>
          <li>
            <strong>Daily Faceoff</strong> (dailyfaceoff.com) &mdash; projected lines and starting
            goalies.
          </li>
          <li>
            <strong>ESPN</strong> (espn.com) &mdash; the injury report.
          </li>
        </ul>
        <p>
          Links you open from the app (for example, to nhl.com) are shown in an in-app browser and
          are governed by those sites&rsquo; policies.
        </p>
      </Section>

      <Section title="CHILDREN">
        <p>
          Rinkside doesn&rsquo;t collect personal information from anyone, including children under
          13.
        </p>
      </Section>

      <Section title="NOT AFFILIATED">
        <p>
          Rinkside is an independent app. It isn&rsquo;t affiliated with or endorsed by the NHL, its
          teams, MoneyPuck, Daily Faceoff or ESPN.
        </p>
      </Section>

      <Section title="CHANGES">
        <p>
          If this policy changes, we&rsquo;ll update this page and the date at the top.
        </p>
      </Section>

      <Section title="CONTACT">
        <p>
          Questions about privacy? Email{" "}
          <a className="underline" href="mailto:jtpatt03@gmail.com">
            jtpatt03@gmail.com
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  )
}
