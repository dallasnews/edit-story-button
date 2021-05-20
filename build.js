const fs = require('fs')
const { minify } = require('terser')

// Minify source and output bookmarklet code
const sourcePath = 'dist/bookmarklet.modern.js'
const source = fs.readFileSync(sourcePath, { encoding: 'utf8' })
minify(source).then(({ code }) => console.log(`javascript:${encodeURI(code)}`))
