export default function Outlook() {
  return (
    <section
      id="outlook"
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
          Actively Evolving
        </div>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          What&#39;s <span className="gradient-text">Next</span>
        </h2>

        <p className="mb-12 text-lg text-slate-400">
          TradingOctopus is under continuous development. New capabilities are
          added regularly as part of this ongoing personal project.
        </p>

        {/* Outlook items */}
        <div className="mb-12 grid gap-4 text-left sm:grid-cols-2">
          {[
            {
              title: 'Published Analyses',
              description:
                'Market analyses and backtesting results will be published here as they are completed.',
            },
            {
              title: 'More Data Sources',
              description:
                'Additional financial data providers and exchanges are being integrated over time.',
            },
            {
              title: 'Advanced Backtesting',
              description:
                'Expanding the backtesting engine with more strategy types and performance metrics.',
            },
            {
              title: 'AI-Driven Insights',
              description:
                'Exploring AI-powered pattern recognition and anomaly detection across aggregated data.',
            },
          ].map(item => (
            <div key={item.title} className="glass-card">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-500">
          This project is built entirely with AI-assisted development and serves
          as a showcase for complex software engineering. More features and
          analyses are on the way.
        </p>
      </div>
    </section>
  )
}
