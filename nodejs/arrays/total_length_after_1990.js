const movies = require('./movies.json')
const _ = require('lodash')

const totalTime = _(movies)
  .filter(movie => Number(movie.Year) > 1990)
  .reduce((acc, movie) => acc + Number(movie.Runtime.match(/\d+/).pop()), 0)

console.log(
  `Total length of movies which were released after 1990: ${totalTime} minutes`
)
