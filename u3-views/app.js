const express = require('express')
const expHbs = require('express-handlebars')
const { courseDetails } = require('./features/courseController')
const { index } = require('./features/indexController')

const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['./views/partials', './views/layouts']
}))

// Middleware
app.use(express.static('public'))

// Route
// TODO later

const Port = 30000
app.listen(Port, () => console.log(`Listening: http://localhost:${POST}`))
