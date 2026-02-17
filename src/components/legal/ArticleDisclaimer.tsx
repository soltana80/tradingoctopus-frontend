import Link from 'next/link'

interface ArticleDisclaimerProps {
  authorName: string
  hasPositions: boolean
  positions?: string[]
  hasAffiliateLinks?: boolean
  publishDate: string
}

export default function ArticleDisclaimer({
  authorName,
  hasPositions,
  positions,
  hasAffiliateLinks,
  publishDate,
}: ArticleDisclaimerProps) {
  const formattedDate = new Date(publishDate).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="rounded-lg border border-ocean-600/30 bg-ocean-600/5 p-4">
      <p className="mb-2 text-sm font-semibold text-ocean-400">
        Offenlegung &amp; Haftungshinweis
      </p>
      <div className="space-y-2 text-xs text-slate-400">
        <p>
          Autor: {authorName} &middot; Ver&ouml;ffentlicht am {formattedDate}
        </p>
        <p>
          Dieser Artikel stellt keine Anlageberatung dar. Er gibt die
          pers&ouml;nliche Meinung des Autors wieder.{' '}
          <Link
            href="/risikohinweis"
            className="underline transition-colors hover:text-slate-300"
          >
            Vollst&auml;ndiger Risikohinweis
          </Link>
        </p>
        {hasPositions && (
          <p>
            <strong className="text-slate-300">Interessenkonflikt:</strong> Der
            Autor h&auml;lt zum Zeitpunkt der Ver&ouml;ffentlichung Positionen
            in den besprochenen Wertpapieren
            {positions && positions.length > 0
              ? ` (${positions.join(', ')})`
              : ''}
            .
          </p>
        )}
        {!hasPositions && (
          <p>
            Der Autor h&auml;lt zum Zeitpunkt der Ver&ouml;ffentlichung keine
            Positionen in den besprochenen Wertpapieren.
          </p>
        )}
        {hasAffiliateLinks && (
          <p>
            Dieser Artikel enth&auml;lt Affiliate-Links (*). Beim Kauf
            &uuml;ber diese Links erh&auml;lt der Betreiber
            m&ouml;glicherweise eine Provision.{' '}
            <Link
              href="/risikohinweis#affiliate-links-und-werbung"
              className="underline transition-colors hover:text-slate-300"
            >
              Mehr erfahren
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}
