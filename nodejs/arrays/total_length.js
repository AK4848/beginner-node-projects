const movies = require('./movies.json')

const totalLenght = movies.reduce(
  (acc, movie) => acc + Number(movie.Runtime.match(/\d+/g).pop()),
  0
)

console.log(`Total time to watch all the movies: ${totalLenght} minutes`)
