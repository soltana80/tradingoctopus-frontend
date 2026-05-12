import {
  HEALTH_CONTENT_TYPE,
  SERVICE_NAME,
  resolveServiceVersion,
} from '@/lib/health'
import { withApiMetrics } from '@/lib/metrics'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = withApiMetrics('/api/health', async () => {
  const body = {
    status: 'pass' as const,
    version: resolveServiceVersion(),
    timestamp: new Date().toISOString(),
    service: SERVICE_NAME,
    uptime_seconds: Math.max(0, Math.floor(process.uptime())),
  }
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': HEALTH_CONTENT_TYPE },
  })
})
