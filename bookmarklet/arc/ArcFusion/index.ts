import GlobalContent from './GlobalContent'

interface ArcFusion {
  globalContent: GlobalContent
}

declare global {
  interface Window {
    Fusion: ArcFusion | undefined
  }
}
