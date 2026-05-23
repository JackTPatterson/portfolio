import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pactor",
  description:
    "Pactor — a private, invite-only app for friend-to-friend prediction pools settled on-chain in USDC on Base.",
}

export default function PactorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
          <Link
            href="/pactor"
            className="font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            Pactor
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/pactor/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/pactor/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/pactor/support"
              className="hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border mt-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-8 text-xs text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Pactor</div>
          <Link href="/" className="hover:text-foreground transition-colors">
            ← jackpatterson.com
          </Link>
        </div>
      </footer>
    </div>
  )
}
