const { response } = require('express')
const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByTitle = (request, response) => {
  const { title } = request.params
  const foundTitle = movies.filter((movie) => {
    return movie.title.includes(title)
  })

  return response.send(foundTitle)
}

const getMovieByDirectors = (request, response) => {
  const { directors } = request.params
  const foundDirectors = movies.filter((movie) => {
    return movie.directors.includes(directors)
  })

  return response.send(foundDirectors)
}


module.exports = { getAllMovies, getMovieByTitle, getMovieByDirectors }
