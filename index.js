const express = require('express')
const movies = require('./movies')
const { response } = require('express')
const { getAllMovies, getMovieByTitle, getMovieByDirectors } = require('./controller/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/:title', getMovieByTitle)

app.get('/movies/:directors', getMovieByDirectors)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337...')
})
