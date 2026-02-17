import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerkl\u00e4rung',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
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
          <h1 className="mb-8 text-3xl font-bold text-slate-100">
            Datenschutzerkl&auml;rung
          </h1>

          <div className="space-y-8 text-slate-300">
            {/* Verantwortliche Stelle */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Verantwortliche Stelle
              </h2>
              <p>
                [TODO: Vollst&auml;ndiger Name / Firmenname]
                <br />
                [TODO: Stra&szlig;e und Hausnummer]
                <br />
                [TODO: PLZ und Ort]
                <br />
                E-Mail: [TODO: E-Mail-Adresse]
              </p>
            </section>

            {/* Erhebung und Speicherung personenbezogener Daten */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="text-slate-400">
                Beim Besuch unserer Website werden automatisch Informationen
                allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles)
                beinhalten etwa die Art des Webbrowsers, das verwendete
                Betriebssystem, den Domainnamen Ihres Internet-Service-Providers,
                Ihre IP-Adresse und &auml;hnliches.
              </p>
              <p className="mt-2 text-slate-400">
                Sie werden insbesondere zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-400">
                <li>
                  Sicherstellung eines problemlosen Verbindungsaufbaus der
                  Website
                </li>
                <li>
                  Sicherstellung einer reibungslosen Nutzung unserer Website
                </li>
                <li>Auswertung der Systemsicherheit und -stabilit&auml;t</li>
                <li>Zu weiteren administrativen Zwecken</li>
              </ul>
              <p className="mt-2 text-slate-400">
                [TODO: Weitere Details zur Datenerhebung erg&auml;nzen]
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Cookies
              </h2>
              <p className="text-slate-400">
                [TODO: Beschreibung der verwendeten Cookies, deren Zweck und
                Speicherdauer. Angaben zu technisch notwendigen Cookies und
                optionalen Cookies (z.B. Analyse, Marketing).]
              </p>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Hosting
              </h2>
              <p className="text-slate-400">
                [TODO: Name und Adresse des Hosting-Anbieters. Informationen zur
                Datenverarbeitung durch den Hoster, Serverstandort und ggf.
                Auftragsverarbeitungsvertrag (AVV).]
              </p>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Kontaktformular
              </h2>
              <p className="text-slate-400">
                [TODO: Sofern ein Kontaktformular vorhanden ist &ndash; Angaben
                zu den erhobenen Daten, Zweck der Verarbeitung, Rechtsgrundlage
                und Speicherdauer. Falls kein Kontaktformular vorhanden, diesen
                Abschnitt entfernen.]
              </p>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Ihre Rechte
              </h2>
              <p className="text-slate-400">
                Sie haben gegen&uuml;ber uns folgende Rechte hinsichtlich der
                Sie betreffenden personenbezogenen Daten:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-400">
                <li>Recht auf Auskunft (&sect; 15 DSGVO)</li>
                <li>Recht auf Berichtigung (&sect; 16 DSGVO)</li>
                <li>
                  Recht auf L&ouml;schung (&sect; 17 DSGVO)
                </li>
                <li>
                  Recht auf Einschr&auml;nkung der Verarbeitung (&sect; 18
                  DSGVO)
                </li>
                <li>
                  Recht auf Daten&uuml;bertragbarkeit (&sect; 20 DSGVO)
                </li>
                <li>Recht auf Widerspruch (&sect; 21 DSGVO)</li>
              </ul>
              <p className="mt-2 text-slate-400">
                Sie haben zudem das Recht, sich bei einer
                Datenschutz-Aufsichtsbeh&ouml;rde &uuml;ber die Verarbeitung
                Ihrer personenbezogenen Daten durch uns zu beschweren.
              </p>
            </section>

            {/* SSL-Verschluesselung */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                SSL-Verschl&uuml;sselung
              </h2>
              <p className="text-slate-400">
                Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
                &Uuml;bertragung vertraulicher Inhalte eine
                SSL-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="mt-2 text-slate-400">
                Wenn die SSL-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die
                Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten
                mitgelesen werden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
