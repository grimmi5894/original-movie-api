const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')
const { response } = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.send(movies)
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337...')
})
