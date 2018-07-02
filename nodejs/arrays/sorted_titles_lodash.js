const movies = require('./movies.json')
const _ = require('lodash')

_.sortBy(movies, movie => movie.imdbRating)
  .map(m => m.Title)
  .forEach(title => console.log(title))
