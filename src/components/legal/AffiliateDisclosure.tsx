'use client'

import { useState } from 'react'

export default function AffiliateDisclosure() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <span className="relative inline-block">
      <button
        type="button"
        className="cursor-help text-ocean-400 hover:text-ocean-300"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Affiliate-Link Hinweis"
      >
        *
      </button>
      {isVisible && (
        <span className="absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-lg border border-slate-700 bg-slate-800 p-3 text-xs text-slate-300 shadow-lg">
          Dies ist ein Affiliate-Link. Beim Kauf &uuml;ber diesen Link
          erh&auml;lt der Betreiber m&ouml;glicherweise eine Provision. F&uuml;r
          Sie entstehen keine zus&auml;tzlichen Kosten.
        </span>
      )}
    </span>
  )
}
