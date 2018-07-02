const args = require('minimist')(process.argv.slice(2))
const cp = require('../files/copybigfile')

if (args.i === undefined || args.o === undefined) {
  return console.log(
    `${args.i === undefined ? 'Input' : 'Output'} path cannot be undefined!`
  )
}

const endMessage = () => console.log('File copy done!')
cp(args.i, args.o, endMessage)
