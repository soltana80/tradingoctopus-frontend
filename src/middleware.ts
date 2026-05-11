/**
 * Next.js middleware — Prometheus page-render counter.
 *
 * Runs on every matched request and increments
 * `frontend_page_render_count_total{route="<pathname>"}` for page-style
 * requests. API routes, the /metrics endpoint, and Next internals are
 * excluded so the counter reflects actual page renders only.
 *
 * NOTE: Next.js middleware runs in the Edge runtime by default, which does
 * not expose Node-specific APIs (e.g. process.hrtime) and ships its own
 * lightweight `prom-client` subset compatibility. We pin this middleware to
 * the Node.js runtime so the singleton registry from `@/lib/metrics` is
 * shared with the /metrics route handler.
 */
import { NextResponse, type NextRequest } from 'next/server'

import { ensureMetricsInitialized, pageRenderCount } from '@/lib/metrics'

// Use the Node.js runtime so we share the same prom-client registry as the
// /metrics route handler. Edge runtime has its own isolate per request and
// would break the counter aggregation.
export const runtime = 'nodejs'

ensureMetricsInitialized()

export function middleware(request: NextRequest): NextResponse {
  const route = request.nextUrl.pathname

  // Exclude /metrics, API routes, and Next internals from the page-render
  // counter — this metric should reflect only HTML/RSC page navigations.
  const isInstrumentablePage =
    route !== '/metrics' &&
    !route.startsWith('/_next') &&
    !route.startsWith('/api/')

  if (isInstrumentablePage) {
    pageRenderCount.labels({ route }).inc()
  }

  return NextResponse.next()
}

// Match everything except static assets and Next build output. The handler
// itself filters out /api/* and /metrics; keeping them in the matcher means
// we still see the matcher hit metric in the future if we ever decide to
// instrument them.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\..*).*)',
  ],
}
