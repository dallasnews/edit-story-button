interface GlobalContent {
  type: string
  _id: string
  promo_items: PromoItems
}

interface PromoItem {
  source?: PromoItemSource
}
interface PromoItemSource {
  edit_url?: string
}
interface PromoItems {
  basic?: PromoItem
}

export default GlobalContent
