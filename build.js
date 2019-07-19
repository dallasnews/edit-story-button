const fs = require('fs')
const { minify } = require('terser')

// Minify code
const res = minify(fs.readFileSync('index.js', { encoding: 'utf8' }))
if (res.error) throw new Error(res.error)
const code = encodeURI(res.code)

// Spit out bookmarklet code
console.log(`javascript:${code}`)
