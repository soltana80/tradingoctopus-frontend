/**
 * GET /metrics — Prometheus exposition endpoint.
 *
 * Mounted at the canonical `/metrics` path (matches the convention used by
 * the other tradingoctopus services scraped by Prometheus). App Router
 * allows route handlers under any directory of `app/`, not only `app/api/`.
 *
 * External exposure is blocked at the reverse proxy: the Caddyfile has a
 * `handle /metrics*` block that responds 404 before forwarding to the
 * frontend. Prometheus reaches it via `http://frontend:6002/metrics` (dev)
 * or `http://frontend:3000/metrics` (prod) on the internal Docker network,
 * which never traverses Caddy.
 *
 * Per ticket #281 no `env` label is added on the application side —
 * environment tagging is owned by the Prometheus scrape config (Layer B
 * static_configs.labels, ticket #231).
 */
import { NextResponse } from 'next/server'

import { ensureMetricsInitialized, metricsRegistry } from '@/lib/metrics'

// Register default Node.js runtime metrics on module load (idempotent).
ensureMetricsInitialized()

// Never cache the metrics response.
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const body = await metricsRegistry.metrics()
  return new NextResponse(body, {
    status: 200,
    headers: {
      'content-type': metricsRegistry.contentType,
      'cache-control': 'no-store',
    },
  })
}
