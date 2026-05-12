import { afterEach, describe, expect, it, vi } from 'vitest'

import { FALLBACK_VERSION, resolveServiceVersion } from '@/lib/health'

import { GET } from './route'

describe('resolveServiceVersion', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('falls back when nothing is set', () => {
    vi.stubEnv('SERVICE_VERSION', '')
    vi.stubEnv('SERVICE_SEMVER', '')
    vi.stubEnv('GIT_SHA', '')
    expect(resolveServiceVersion()).toBe(FALLBACK_VERSION)
    expect(FALLBACK_VERSION).toBe('0.1.0+git.0000000')
  })

  it('composes SERVICE_SEMVER + GIT_SHA when both present', () => {
    vi.stubEnv('SERVICE_VERSION', '')
    vi.stubEnv('SERVICE_SEMVER', '1.2.3')
    vi.stubEnv('GIT_SHA', 'abc1234')
    expect(resolveServiceVersion()).toBe('1.2.3+git.abc1234')
  })

  it('prefers SERVICE_VERSION over the composed pair', () => {
    vi.stubEnv('SERVICE_VERSION', '9.9.9+git.deadbee')
    vi.stubEnv('SERVICE_SEMVER', 'garbage')
    vi.stubEnv('GIT_SHA', 'garbage')
    expect(resolveServiceVersion()).toBe('9.9.9+git.deadbee')
  })
})

const VERSION_REGEX = /^\d+\.\d+\.\d+(?:[-+][\w.]+)?\+git\.[A-Za-z0-9]+$/

const EXPECTED_KEYS = [
  'service',
  'status',
  'timestamp',
  'uptime_seconds',
  'version',
] as const

async function invokeHealth(): Promise<{
  response: Response
  body: Record<string, unknown>
}> {
  const response = await GET(new Request('http://localhost/api/health'))
  const raw = (await response.json()) as unknown
  if (raw === null || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new Error('Health response body was not a JSON object')
  }
  return { response, body: raw as Record<string, unknown> }
}

describe('GET /api/health (D1 schema)', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('returns HTTP 200 with the application/health+json content type', async () => {
    const { response } = await invokeHealth()
    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toBe('application/health+json')
  })

  it('exposes exactly the D1 keys with no extras (e.g. no "checks")', async () => {
    const { body } = await invokeHealth()
    expect(Object.keys(body).sort()).toEqual([...EXPECTED_KEYS])
    expect(body).not.toHaveProperty('checks')
  })

  it('reports the correct service identity and pass status', async () => {
    const { body } = await invokeHealth()
    expect(body.service).toBe('frontend')
    expect(body.status).toBe('pass')
  })

  it('returns a non-negative integer uptime_seconds', async () => {
    const { body } = await invokeHealth()
    const uptime = body.uptime_seconds
    expect(typeof uptime).toBe('number')
    expect(Number.isInteger(uptime)).toBe(true)
    expect(uptime as number).toBeGreaterThanOrEqual(0)
  })

  it('floors uptime_seconds deterministically (42.7 -> 42)', async () => {
    const spy = vi.spyOn(process, 'uptime').mockReturnValue(42.7)
    try {
      const { body } = await invokeHealth()
      expect(body.uptime_seconds).toBe(42)
    } finally {
      spy.mockRestore()
    }
  })

  it('emits a parseable ISO-8601 UTC timestamp ending in Z', async () => {
    const { body } = await invokeHealth()
    const timestamp = body.timestamp
    expect(typeof timestamp).toBe('string')
    const ts = String(timestamp)
    expect(Number.isFinite(Date.parse(ts))).toBe(true)
    expect(ts.endsWith('Z')).toBe(true)
  })

  it('emits a version that matches the semver+git.sha contract', async () => {
    vi.stubEnv('SERVICE_VERSION', '')
    vi.stubEnv('SERVICE_SEMVER', '1.4.2')
    vi.stubEnv('GIT_SHA', 'cafef00')
    const { body } = await invokeHealth()
    const version = body.version
    expect(typeof version).toBe('string')
    expect(String(version)).toMatch(VERSION_REGEX)
  })

  it('falls back to the default version when no env is set', async () => {
    vi.stubEnv('SERVICE_VERSION', '')
    vi.stubEnv('SERVICE_SEMVER', '')
    vi.stubEnv('GIT_SHA', '')
    const { body } = await invokeHealth()
    expect(body.version).toBe(FALLBACK_VERSION)
    expect(String(body.version)).toMatch(VERSION_REGEX)
  })
})
