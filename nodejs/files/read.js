const fs = require('fs')

let content = fs.readFile('movies.json', (error, content) => {
  if (error) return console.log('Uh-oh, something went wrong!', error)
  console.log(JSON.parse(content))
})
