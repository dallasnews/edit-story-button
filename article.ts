interface GlobalContent {
  type: string
  _id: string
}

interface FusionGlobal {
  globalContent: GlobalContent
}

interface AnalyticsConfigVars {
  articleId: string
}

interface AnalyticsConfig {
  vars: AnalyticsConfigVars
}

declare const Fusion: FusionGlobal

const findAMPAnaylticsArticleId = (): string | null => {
  const configSelector = 'amp-analytics > script[type$=json]'
  const configElements = [...document.querySelectorAll(configSelector)]
  const articleId = configElements
    .map((scriptEl) => {
      let data: AnalyticsConfig | null

      try {
        data = JSON.parse(scriptEl.innerHTML)
      } catch (e) {
        data = null
      }

      return data?.vars?.articleId
    })
    .find((c) => c /* return the first non-empty item */)

  return articleId || null
}

const findFusionArticleId = (): string | null => {
  const content = Fusion?.globalContent
  return (content?.type === 'story' && content?._id) || null
}

export const getArticleId = (): string | null =>
  findFusionArticleId() || findAMPAnaylticsArticleId()
