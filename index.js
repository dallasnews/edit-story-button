;(() => {
  // Edit Story Bookmarklet - all logic must be in this IIFE

  // Dialogs
  const cancel = () => alert(`Sorry, this doesn't look like a story page`)
  const approve = () => confirm('Unknown site - try to open editor anyway?')

  // Host verification
  const arcStaging = 'https://sandbox.dmn.arcpublishing.com/composer/#!'
  const arcDmnDev = 'https://dmndev.dmn.arcpublishing.com/composer/#!'
  const arcProduction = 'https://dmn.arcpublishing.com/composer/#!'

  const hosts = [
    // Local direct
    {
      domain: /localhost(:\d+)?$/, // hostname regex
      editor: arcStaging, // editor base URL
    },
    // Local with TLS Proxy
    {
      domain: /local.*dallasnews.com(:\d+)?$/,
      editor: arcStaging,
    },

    // Arc DMNdev
    {
      domain: /dmndev.dmn.arcpublishing.com$/,
      editor: arcDmnDev,
    },

    // Arc Dev
    {
      domain: /dev.dmn.arcpublishing.com$/,
      editor: arcStaging,
    },

    // Arc Sandbox
    {
      domain: /sandbox.dmn.arcpublishing.com$/,
      editor: arcStaging,
    },
    // Arc Sandbox with CNAME
    {
      domain: /staging.dallasnews.com$/,
      editor: arcStaging,
    },

    // Arc Production
    {
      domain: /^dmn.arcpublishing.com$/,
      editor: arcProduction,
    },
    // Arc Production with CNAME
    {
      domain: /^(www\.)?dallasnews.com$/,
      editor: arcProduction,
    },
  ]

  const knownHost = hosts.find(({ domain }) => location.hostname.match(domain))
  const editorUrl = knownHost ? knownHost.editor : arcProduction

  // Arc/Composer Handler
  const { globalContent: content = {} } = window.Fusion || {}
  const arcId = content.type === 'story' && content._id

  const shouldOpenArc = arcId && (knownHost || approve())
  if (shouldOpenArc) return open(`${editorUrl}/edit/${arcId}/`)

  // No matches found
  !arcId && cancel()
})()
