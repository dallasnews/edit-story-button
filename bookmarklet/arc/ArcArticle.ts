import { escapeRegexChars, firstNonEmptyString, parseJSON } from '../utils'
import ArcEnvironment, { arcBaseDomain } from './ArcEnvironment'
import './ArcFusion'
import config from '../config'

class ArcArticle {
  id: string | null
  environment: ArcEnvironment | null
  editUrl: string | null

  constructor() {
    this.id = this.findFusionArticleId() || this.findAMPAnaylticsArticleId()
    this.environment = this.findEnvironment()
    this.editUrl = this.makeEditUrl(this.id, this.environment)
  }

  findFusionArticleId = (): string | null => {
    const content = window.Fusion?.globalContent
    return (content?.type === 'story' && content?._id) || null
  }

  findAMPAnaylticsArticleId = (): string | null => {
    const configSelector = 'amp-analytics > script[type$=json]'
    const configElements = [...document.querySelectorAll(configSelector)]
    const articleId = firstNonEmptyString(
      configElements.map(
        ({ innerHTML }) =>
          (parseJSON(innerHTML) as AnalyticsConfig)?.vars?.articleId || null
      )
    )

    return articleId || null
  }

  findEnvironment = (): ArcEnvironment | null => {
    const arcDomainRegex = escapeRegexChars(arcBaseDomain)

    const getArcImageEnvironment = (): string | null => {
      const originPrefix = `^https?://(.+@)?`
      const imageEditUrl =
        window.Fusion?.globalContent?.promo_items?.basic?.source?.edit_url
      const imageDomainMatches = imageEditUrl?.match(
        new RegExp(`${originPrefix}(.*)\.${arcDomainRegex}`)
      )
      return imageDomainMatches?.[2] || null
    }

    const { environments } = config

    // Try to match host to Arc global content article ID
    const domainEnv = environments.find((env) =>
      env?.domains?.find((domain) => location.host.match(domain))
    )

    // Try to match host to a named Arc environment
    const namedEnv = environments.find((env) =>
      location.host.match(`${env.name}\.${arcDomainRegex}`)
    )

    // Fall back to the Arc Photo environment name
    const imageEnvName = getArcImageEnvironment()
    const imageEnv = imageEnvName ? new ArcEnvironment(imageEnvName) : null

    return domainEnv || namedEnv || imageEnv || null
  }

  makeEditUrl = (
    id: string | null,
    env: ArcEnvironment | null
  ): string | null => (id && env ? `${env.composerBaseUrl}/${id}/` : null)
}

interface AnalyticsConfig {
  vars: AnalyticsConfigVars
}
interface AnalyticsConfigVars {
  articleId: string
}

export default ArcArticle
