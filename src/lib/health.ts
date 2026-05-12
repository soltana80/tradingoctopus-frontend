export const SERVICE_NAME = 'frontend'
export const HEALTH_CONTENT_TYPE = 'application/health+json'
export const FALLBACK_VERSION = '0.1.0+git.0000000'

export function resolveServiceVersion(
  env: NodeJS.ProcessEnv = process.env,
): string {
  const direct = env.SERVICE_VERSION?.trim()
  if (direct) return direct
  const semver = env.SERVICE_SEMVER?.trim()
  const sha = env.GIT_SHA?.trim()
  if (semver && sha) return `${semver}+git.${sha}`
  return FALLBACK_VERSION
}
