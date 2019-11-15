;(() => {
  // Edit Story Bookmarklet - all logic must be in this IIFE

  // Dialogs
  const cancel = () => alert(`Sorry, this doesn't look like a story page`)
  const approve = () => confirm('Unknown site - try to open editor anyway?')

  // Host verification
  const arcStaging = 'https://sandbox.dmn.arcpublishing.com/composer/#!'
  const arcDefault = 'https://dmn.arcpublishing.com/composer/#!'

  const hosts = [
    {
      domain: /staging.dallasnews.com$/, // hostname regex
      editor: arcStaging, // editor base URL
    },
    {
      domain: /dallasnews.com$/,
      editor: arcDefault,
    },
  ]

  const knownHost = hosts.find(({ domain }) => location.hostname.match(domain))
  const editorUrl = knownHost ? knownHost.editor : arcDefault

  // Arc/Composer Handler
  const { globalContent: content = {} } = window.Fusion || {}
  const arcId = content.type === 'story' && content._id

  const shouldOpenArc = arcId && (knownHost || approve())
  if (shouldOpenArc) return open(`${editorUrl}/edit/${arcId}/`)

  // No matches found
  !arcId && cancel()
})()
