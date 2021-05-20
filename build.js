const fs = require('fs')
const { minify } = require('terser')

// Minify source and output bookmarklet code
const source = fs.readFileSync('index.js', { encoding: 'utf8' })
minify(source).then(({ code }) => console.log(`javascript:${encodeURI(code)}`))
