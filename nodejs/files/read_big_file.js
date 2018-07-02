const fs = require('fs')

let fileReadStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8' })

let wordsCount = 0

fileReadStream.on('data', chunk => {
  wordsCount += chunk.split(/\W+/).length
})

fileReadStream.on('end', () => console.log(`Total words: ${wordsCount}`))
