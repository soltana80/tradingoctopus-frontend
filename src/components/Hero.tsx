export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-ocean-600/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-teal-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ocean-500/30 bg-ocean-950/50 px-4 py-1.5 text-sm text-ocean-300">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
          Financial Data Platform
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Market Data,{' '}
          <span className="gradient-text">Aggregated & Analyzed</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          TradingOctopus connects to multiple financial data sources, aggregates
          OHLCV time series, and delivers unified market insights across NASDAQ,
          NYSE, XETRA, and more.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#coming-soon"
            className="inline-flex items-center gap-2 rounded-lg bg-ocean-600 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-500"
          >
            Get Early Access
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  )
}
