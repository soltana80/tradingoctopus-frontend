/**
 * Prometheus metrics module for the Next.js frontend.
 *
 * Exposes a singleton `prom-client` registry plus convenience helpers for
 * instrumenting page renders and internal API routes. Designed for the
 * App Router (Next.js 14) but the `withMetrics` wrapper is router-agnostic.
 *
 * Per-PR env-label policy (ticket #281): no `env` label is attached on the
 * application side. Environment tagging is owned by the Prometheus scrape
 * config (ticket #231 — Layer B static_configs.labels).
 *
 * Custom metrics (frontend_*):
 *   - frontend_page_render_count_total{route}
 *   - frontend_api_route_duration_seconds{route,method,status_class}
 *   - frontend_api_route_errors_total{route,status_class}
 *
 * Default Node.js runtime metrics are emitted via prom-client's
 * collectDefaultMetrics() with the `frontend_` prefix (process_*, nodejs_*).
 *
 * Initialisation is idempotent and safe to call from multiple modules.
 */
import {
  Counter,
  Histogram,
  collectDefaultMetrics,
  register,
} from 'prom-client'

let initialized = false

export const pageRenderCount = new Counter({
  name: 'frontend_page_render_count_total',
  help: 'Total page renders by route (HTML/RSC requests excluding _next assets and API routes).',
  labelNames: ['route'],
})

export const apiRouteDuration = new Histogram({
  name: 'frontend_api_route_duration_seconds',
  help: 'Duration of internal Next.js API route requests, in seconds.',
  labelNames: ['route', 'method', 'status_class'],
  buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10],
})

export const apiRouteErrors = new Counter({
  name: 'frontend_api_route_errors_total',
  help: 'Internal API route error responses (status >= 400) by route and status class.',
  labelNames: ['route', 'status_class'],
})

/**
 * Ensure default Node.js runtime metrics are registered exactly once.
 * Safe to call from every entry point (metrics route handler, middleware,
 * instrumented API routes); subsequent calls are a no-op.
 */
export function ensureMetricsInitialized(): void {
  if (initialized) return
  collectDefaultMetrics({ prefix: 'frontend_' })
  initialized = true
}

/**
 * Map an HTTP status code to its class label (e.g. 200 -> "2xx", 503 -> "5xx").
 * Out-of-range values fall back to "5xx" so they remain alertable.
 */
export function statusClassFor(status: number): string {
  if (!Number.isFinite(status) || status < 100 || status >= 600) return '5xx'
  return `${Math.floor(status / 100)}xx`
}

/**
 * Higher-order wrapper for App Router `route.ts` handlers. Wraps a handler so
 * that every invocation records:
 *   - frontend_api_route_duration_seconds (always)
 *   - frontend_api_route_errors_total     (when status >= 400 or handler threw)
 *
 * Usage:
 *   export const GET = withApiMetrics('/api/health', async (req) => {...})
 */
export function withApiMetrics<
  T extends (request: Request, ...rest: never[]) => Promise<Response> | Response,
>(routeName: string, handler: T): T {
  return (async (request: Request, ...rest: never[]) => {
    // Use Date.now() rather than process.hrtime so the helper is safe to
    // load from both the Node.js runtime (App Router handlers) and the Edge
    // runtime (Next.js middleware) without static-analysis warnings.
    // Millisecond precision is sufficient for HTTP latency histograms.
    const startMs = Date.now()
    const method = (request.method ?? 'GET').toUpperCase()
    let status = 500
    let threw = false
    try {
      const response = await handler(request, ...rest)
      status = response.status
      return response
    } catch (err) {
      threw = true
      throw err
    } finally {
      const durationSec = (Date.now() - startMs) / 1000
      const statusClass = statusClassFor(status)
      apiRouteDuration
        .labels({ route: routeName, method, status_class: statusClass })
        .observe(durationSec)
      if (threw || status >= 400) {
        apiRouteErrors.labels({ route: routeName, status_class: statusClass }).inc()
      }
    }
  }) as T
}

/**
 * Re-export of the default prom-client registry. Exposed so the /metrics
 * route can render the canonical exposition format without needing to import
 * prom-client directly.
 */
export const metricsRegistry = register
