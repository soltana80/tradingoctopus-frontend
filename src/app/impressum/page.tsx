import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-ocean-400"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="glass-card">
          <h1 className="mb-8 text-3xl font-bold text-slate-100">Impressum</h1>

          <div className="space-y-8 text-slate-300">
            {/* Angaben gemaess 5 TMG */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Angaben gem&auml;&szlig; &sect; 5 TMG
              </h2>
              <p>
                Dr. Florian Drechsler
                <br />
                Panitzstr. 14
                <br />
                04229 Leipzig
                <br />
                Deutschland
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Kontakt
              </h2>
              <p>
                E-Mail: contact@fdrechsler.de
              </p>
            </section>

            {/* Verantwortlich fuer den Inhalt */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV
              </h2>
              <p>
                Dr. Florian Drechsler
                <br />
                Panitzstr. 14
                <br />
                04229 Leipzig
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Haftungsausschluss
              </h2>

              <h3 className="mb-2 mt-4 text-lg font-medium text-slate-200">
                Haftung f&uuml;r Inhalte
              </h3>
              <p className="text-slate-400">
                Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt
                erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und
                Aktualit&auml;t der Inhalte k&ouml;nnen wir jedoch keine
                Gew&auml;hr &uuml;bernehmen. Als Diensteanbieter sind wir
                gem&auml;&szlig; &sect; 7 Abs. 1 TMG f&uuml;r eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde
                Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu
                forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-medium text-slate-200">
                Haftung f&uuml;r Links
              </h3>
              <p className="text-slate-400">
                Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen
                wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
                &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
                stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
                &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt
                der Verlinkung nicht erkennbar.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
