import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Risikohinweis',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RisikohinweisPage() {
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
            Risikohinweis
          </h1>

          <div className="space-y-8 text-slate-300">
            {/* Keine Anlageberatung */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Keine Anlageberatung
              </h2>
              <p className="text-slate-400">
                Die auf dieser Website ver&ouml;ffentlichten Inhalte stellen
                die pers&ouml;nliche Meinung und Erfahrung des Autors
                (Dr.&nbsp;Florian Drechsler) als Privatanleger dar. Sie
                stellen ausdr&uuml;cklich keine Anlageberatung im Sinne des
                Kreditwesengesetzes (KWG &sect;&nbsp;1 Abs.&nbsp;1a
                Nr.&nbsp;1a) dar und sind nicht als solche zu verstehen.
              </p>
              <p className="mt-2 text-slate-400">
                S&auml;mtliche Inhalte werden &uuml;ber einen &ouml;ffentlich
                zug&auml;nglichen Informationskanal verbreitet und richten
                sich an die Allgemeinheit. Es handelt sich nicht um auf
                individuelle Bed&uuml;rfnisse zugeschnittene Empfehlungen.
              </p>
              <p className="mt-2 text-slate-400">
                Bevor Sie Anlageentscheidungen treffen, sollten Sie sich von
                einem qualifizierten und unabh&auml;ngigen Finanzberater
                beraten lassen, der Ihre pers&ouml;nliche finanzielle
                Situation ber&uuml;cksichtigt.
              </p>
            </section>

            {/* Risikohinweis */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Risikohinweis
              </h2>
              <p className="text-slate-400">
                Anlagen in Finanzinstrumente sind mit Risiken verbunden. Der
                Wert von Anlagen sowie die Ertr&auml;ge daraus k&ouml;nnen
                sowohl steigen als auch fallen. Anleger erhalten
                m&ouml;glicherweise nicht den urspr&uuml;nglich investierten
                Betrag zur&uuml;ck.
              </p>
              <p className="mt-2 text-slate-400">
                Zu den Risiken z&auml;hlen insbesondere:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-400">
                <li>
                  <strong className="text-slate-300">Kursschwankungen</strong>{' '}
                  &ndash; Die Preise von Wertpapieren k&ouml;nnen erheblich
                  schwanken
                </li>
                <li>
                  <strong className="text-slate-300">W&auml;hrungsrisiken</strong>{' '}
                  &ndash; Bei Anlagen in Fremdw&auml;hrungen kann der
                  Wechselkurs den Wert beeinflussen
                </li>
                <li>
                  <strong className="text-slate-300">Bonit&auml;tsrisiken</strong>{' '}
                  &ndash; Emittenten k&ouml;nnen zahlungsunf&auml;hig werden
                </li>
                <li>
                  <strong className="text-slate-300">Zins&auml;nderungsrisiken</strong>{' '}
                  &ndash; Ver&auml;nderungen des Zinsniveaus k&ouml;nnen den
                  Wert von Anlagen beeinflussen
                </li>
                <li>
                  <strong className="text-slate-300">Liquidit&auml;tsrisiken</strong>{' '}
                  &ndash; Es besteht das Risiko, dass Anlagen nicht jederzeit
                  ver&auml;u&szlig;ert werden k&ouml;nnen
                </li>
              </ul>
              <p className="mt-3 text-slate-400">
                <strong className="text-slate-300">
                  Ein Totalverlust des eingesetzten Kapitals ist
                  m&ouml;glich.
                </strong>{' '}
                Fr&uuml;here Wertentwicklungen sind kein verl&auml;sslicher
                Indikator f&uuml;r die zuk&uuml;nftige Wertentwicklung.
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Haftungsausschluss
              </h2>
              <p className="text-slate-400">
                Die Inhalte dieser Website wurden mit gr&ouml;&szlig;ter
                Sorgfalt erstellt. F&uuml;r die Richtigkeit,
                Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte wird
                jedoch keine Gew&auml;hr &uuml;bernommen.
              </p>
              <p className="mt-2 text-slate-400">
                Die Haftung f&uuml;r leichte Fahrl&auml;ssigkeit wird
                ausgeschlossen, soweit keine vertragswesentlichen Pflichten
                (Kardinalpflichten) verletzt werden und soweit gesetzlich
                zul&auml;ssig. Dieser Haftungsausschluss gilt nicht
                f&uuml;r Sch&auml;den aus der Verletzung des Lebens, des
                K&ouml;rpers oder der Gesundheit.
              </p>
              <p className="mt-2 text-slate-400">
                Eine Haftung f&uuml;r Vorsatz und grobe
                Fahrl&auml;ssigkeit bleibt in jedem Fall unber&uuml;hrt.
              </p>
            </section>

            {/* Interessenkonflikte */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Interessenkonflikte
              </h2>
              <p className="text-slate-400">
                Der Autor (Dr.&nbsp;Florian Drechsler) kann Positionen in
                den auf dieser Website besprochenen Finanzinstrumenten
                halten. Konkrete Positionen werden in den jeweiligen
                Artikeln offengelegt.
              </p>
              <p className="mt-2 text-slate-400">
                Diese Offenlegung erfolgt im Sinne des
                Wertpapierhandelsgesetzes (WpHG) und der
                Marktmissbrauchsverordnung (MAR, EU&nbsp;596/2014
                Art.&nbsp;20), um m&ouml;gliche Interessenkonflikte
                transparent zu machen.
              </p>
              <p className="mt-2 text-slate-400">
                Das Bestehen oder Nichtbestehen von Positionen hat keinen
                Einfluss auf die Objektivit&auml;t der ver&ouml;ffentlichten
                Analysen und Meinungen.
              </p>
            </section>

            {/* Keine Steuerberatung */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Keine Steuerberatung
              </h2>
              <p className="text-slate-400">
                Die auf dieser Website ver&ouml;ffentlichten Inhalte stellen
                keine Steuerberatung dar. Steuerliche Informationen werden
                nach bestem Wissen wiedergegeben, ersetzen jedoch nicht die
                individuelle Beratung durch einen Steuerberater.
              </p>
              <p className="mt-2 text-slate-400">
                Steuerliche Regelungen sind komplex und k&ouml;nnen sich
                &auml;ndern. Bitte konsultieren Sie f&uuml;r Ihre
                pers&ouml;nliche Steuersituation einen qualifizierten
                Steuerberater.
              </p>
            </section>

            {/* Affiliate-Links und Werbung */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-100">
                Affiliate-Links und Werbung
              </h2>
              <p className="text-slate-400">
                Diese Website kann Affiliate-Links enthalten, die mit einem
                Sternchen (*) gekennzeichnet sind. Wenn Sie &uuml;ber einen
                solchen Link ein Produkt oder eine Dienstleistung erwerben,
                erh&auml;lt der Betreiber dieser Website m&ouml;glicherweise
                eine Provision vom Anbieter.
              </p>
              <p className="mt-2 text-slate-400">
                F&uuml;r Sie entstehen dadurch keine zus&auml;tzlichen
                Kosten. Die Kennzeichnung erfolgt gem&auml;&szlig;
                &sect;&nbsp;5a Abs.&nbsp;6 UWG (Gesetz gegen den unlauteren
                Wettbewerb).
              </p>
              <p className="mt-2 text-slate-400">
                Bestehende oder m&ouml;gliche Affiliate-Partnerschaften
                haben keinen Einfluss auf die inhaltliche Gestaltung der
                ver&ouml;ffentlichten Beitr&auml;ge. Die redaktionelle
                Unabh&auml;ngigkeit bleibt jederzeit gewahrt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
