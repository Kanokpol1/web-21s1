const express = require('express')
const { json, urlencoded } = require('body-parser')

const { readBooks, readBook, createBook, replaceBook, updateBook, deleteBook } = require('./features/book-controller')
const { covies, covie, createCovie, updateCovie, deleteCovie } = require('./features/covid-controller')

const app = express()

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/books', readBooks)
app.get('/books/:isbn13', readBook)
app.post('/books', createBook)
app.put('/books/:isbn13', replaceBook)
app.patch('/books/:isbn13', updateBook)
app.delete('/books/:isbn13', deleteBook)

// Routes Lab
app.get('/covid', covies)
app.get('/covid/:stateId', covie)
app.post('/covid', createCovie)
app.patch('/covid/:stateId', updateCovie)
app.delete('/covid/:stateId', deleteCovie)

module.exports = { app }
