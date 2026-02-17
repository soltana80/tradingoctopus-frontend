export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/50 px-4 py-1.5 text-sm text-teal-300">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-teal-400" />
          In Development
        </div>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Coming <span className="gradient-text">Soon</span>
        </h2>

        <p className="mb-12 text-lg text-slate-400">
          We are building a comprehensive financial data platform. Sign up to be
          notified when we launch.
        </p>

        {/* Planned features timeline */}
        <div className="mb-12 grid gap-4 text-left sm:grid-cols-2">
          {[
            {
              phase: 'Phase 1',
              title: 'Data API',
              description: 'REST API for OHLCV data, instruments, and events',
              status: 'building',
            },
            {
              phase: 'Phase 2',
              title: 'Dashboard',
              description:
                'Interactive charts, watchlists, and portfolio tracking',
              status: 'planned',
            },
            {
              phase: 'Phase 3',
              title: 'Analytics',
              description:
                'Technical indicators, pattern recognition, and alerts',
              status: 'planned',
            },
            {
              phase: 'Phase 4',
              title: 'Integrations',
              description: 'Webhooks, third-party integrations, and exports',
              status: 'planned',
            },
          ].map(item => (
            <div
              key={item.phase}
              className="glass-card flex items-start gap-4"
            >
              <div
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  item.status === 'building'
                    ? 'bg-teal-600/30 text-teal-300'
                    : 'bg-slate-700/50 text-slate-400'
                }`}
              >
                {item.phase.split(' ')[1]}
              </div>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
                {item.status === 'building' && (
                  <span className="mt-2 inline-block text-xs font-medium text-teal-400">
                    Currently building
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Email signup placeholder */}
        <div className="glass-card mx-auto max-w-md">
          <p className="mb-4 text-sm font-medium text-slate-300">
            Get notified when we launch
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-ocean-500"
              aria-label="Email address"
            />
            <button
              type="button"
              className="shrink-0 rounded-lg bg-ocean-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ocean-500"
            >
              Notify Me
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            No spam. We will only notify you when we launch.
          </p>
        </div>
      </div>
    </section>
  )
}
