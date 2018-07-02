const movies = require('./movies.json')
const _ = require('lodash')

const totalLength = _.reduce(
  movies,
  (acc, movie) => acc + Number(movie.Runtime.match(/\d+/g).pop()),
  0
)

console.log(totalLength)
