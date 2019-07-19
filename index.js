;(() => {
  // Edit Story Bookmarklet - all logic must be in this IIFE

  // Dialogs
  const cancel = () => alert(`Sorry, this doesn't look like a story page`)
  const approve = () => confirm('Unknown site - try to open editor anyway?')

  // Host verification
  const hostRegex = /(aldiadallas.com|dallasnews.com)$/
  const knownHost = location.hostname.match(hostRegex)

  // Arc/Ellipsis Handler
  const ellipsis = 'https://dmn.arcpublishing.com/ellipsis'
  const { globalContent: content = {} } = window.Fusion || {}
  const arcId = content.type === 'story' && content._id

  const shouldOpenArc = arcId && (knownHost || approve())
  if (shouldOpenArc) return open(`${ellipsis}/#!/edit/${arcId}/`)

  // Serif/Storyteller Handler
  const serif = 'http://serif.dallasnews.com/chronicle/storyteller/compose.html'
  const metaNodes = document.querySelectorAll('[type$="ld+json"]')
  const articleNodeCheck = node => node.innerText.includes('NewsArticle')
  const article = Array.from(metaNodes).find(articleNodeCheck)
  const metaId = article && JSON.parse(article.innerText).post_id
  const { articleId: serifId = metaId } = window.DFP_adTargets || {}

  const shouldOpenSerif = serifId && (knownHost || approve())
  if (shouldOpenSerif) return open(`${serif}?_id=${serifId}`)

  // No matches found
  cancel()
})()
