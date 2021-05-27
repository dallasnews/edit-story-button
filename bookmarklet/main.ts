import ArcArticle from './arc/ArcArticle'

const cancel = () => alert(`Sorry, this doesn't look like a story page`)
const { editUrl } = new ArcArticle()
editUrl ? open(editUrl) : cancel()
