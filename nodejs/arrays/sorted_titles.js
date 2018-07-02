const movies = require('./movies.json')

console.log('Movie titles sorted by IMDB rating:')
movies
  .sort((a, b) => (a.imdbRating < b.imdbRating ? -1 : 1))
  .forEach(movie => console.log(movie.Title))
