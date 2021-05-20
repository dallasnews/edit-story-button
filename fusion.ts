interface GlobalContent {
  type: string
  _id: string
}

interface FusionGlobal {
  globalContent: GlobalContent
}

declare const Fusion: FusionGlobal
