import Link from 'next/link'

export default function DisclaimerFooter() {
  return (
    <div className="mt-6 border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
      <p>
        Die Inhalte dieser Website stellen keine Anlageberatung dar. Anlagen in
        Finanzinstrumente sind mit Risiken verbunden &ndash; ein Totalverlust des
        eingesetzten Kapitals ist m&ouml;glich.{' '}
        <Link
          href="/risikohinweis"
          className="underline transition-colors hover:text-slate-400"
        >
          Vollst&auml;ndiger Risikohinweis
        </Link>
      </p>
    </div>
  )
}
