const fs = require('fs')

const cp = (source, destination, endEvent) => {
  let readStream = fs.createReadStream(source)
  let writeStream = fs.createWriteStream(destination)

  readStream.on('data', chunk => {
    writeStream.write(chunk)
  })
  readStream.on('end', () => {
    readStream.close()
    writeStream.close()
    endEvent && endEvent()
  })
}

module.exports = cp
