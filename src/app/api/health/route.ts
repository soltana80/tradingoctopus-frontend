import { NextResponse } from 'next/server'

import { withApiMetrics } from '@/lib/metrics'

/**
 * GET /api/health — liveness probe for Docker / Caddy health checks.
 *
 * Wrapped with `withApiMetrics` so every invocation records the request
 * duration histogram and increments the API-route error counter on
 * non-2xx/non-3xx responses or thrown handlers (ticket #243).
 */
export const GET = withApiMetrics('/api/health', async () => {
  return NextResponse.json({ status: 'ok' })
})
