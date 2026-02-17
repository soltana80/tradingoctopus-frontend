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
                Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
                dieser Website ist:
              </p>
              <p className="mt-2">
                Dr. Florian Drechsler
                <br />
                Panitzstr. 14
                <br />
                04229 Leipzig
                <br />
                E-Mail: contact@fdrechsler.de
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
                Ihre Daten werden nicht an Dritte weitergegeben. Die
                Rechtsgrundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs.
                1 lit. f DSGVO (berechtigtes Interesse an der technischen
                Bereitstellung und Sicherheit der Website).
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Cookies
              </h2>
              <p className="text-slate-400">
                Diese Website verwendet Cookies. Das sind kleine Textdateien,
                die Ihr Webbrowser auf Ihrem Endger&auml;t speichert. Cookies
                helfen uns dabei, unser Angebot nutzerfreundlicher und
                effektiver zu gestalten.
              </p>
              <p className="mt-2 text-slate-400">
                Einige Cookies sind &quot;Session-Cookies&quot; und werden nach
                Ende Ihrer Browser-Sitzung automatisch gel&ouml;scht. Andere
                Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie
                diese l&ouml;schen oder sie ablaufen. Diese Cookies
                erm&ouml;glichen es, Ihren Browser beim n&auml;chsten Besuch
                wiederzuerkennen.
              </p>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Hosting
              </h2>
              <p className="text-slate-400">
                Diese Website wird auf einem Server der netcup GmbH,
                Daimlerstra&szlig;e 25, 76185 Karlsruhe gehostet. Der
                Hosting-Anbieter erhebt und speichert automatisch Informationen
                in sogenannten Server-Log-Dateien, die Ihr Browser automatisch
                &uuml;bermittelt. Der Serverstandort ist Deutschland.
              </p>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Kontaktaufnahme per E-Mail
              </h2>
              <p className="text-slate-400">
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben
                (E-Mail-Adresse, ggf. Name und Ihre Nachricht) von uns
                gespeichert, um Ihre Anfrage zu bearbeiten. Die in diesem
                Zusammenhang anfallenden Daten l&ouml;schen wir, nachdem die
                Speicherung nicht mehr erforderlich ist, oder schr&auml;nken die
                Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten
                bestehen.
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
