interface GlobalContent {
  type: string
  _id: string
}

interface FusionGlobal {
  globalContent: GlobalContent
}

declare const Fusion: FusionGlobal

const findFusionArticleId = (): string | null => {
  const content = Fusion?.globalContent
  return (content?.type === 'story' && content?._id) || null
}

export const getArticleId = (): string | null => findFusionArticleId()
