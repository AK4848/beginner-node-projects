const movies = require('./movies.json')
const _ = require('lodash')

console.log('Director names alphabetically')

_.sortBy(_.uniq(_.map(movies, movie => movie.Director))).forEach(director =>
  console.log(director)
)
