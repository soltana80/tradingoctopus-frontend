import Link from 'next/link'
import DisclaimerFooter from '@/components/legal/DisclaimerFooter'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ocean-600/20">
              <svg
                className="h-5 w-5 text-ocean-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-slate-300">
              TradingOctopus
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 text-sm text-slate-500">
            <a
              href="#features"
              className="transition-colors hover:text-slate-300"
            >
              Features
            </a>
            <a
              href="#coming-soon"
              className="transition-colors hover:text-slate-300"
            >
              Roadmap
            </a>
          </nav>

          {/* Legal Links */}
          <nav className="flex gap-6 text-sm text-slate-500">
            <Link
              href="/impressum"
              className="transition-colors hover:text-slate-300"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-slate-300"
            >
              Datenschutz
            </Link>
            <Link
              href="/risikohinweis"
              className="transition-colors hover:text-slate-300"
            >
              Risikohinweis
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-slate-600">
            &copy; {currentYear} TradingOctopus
          </p>
        </div>

        <DisclaimerFooter />
      </div>
    </footer>
  )
}
