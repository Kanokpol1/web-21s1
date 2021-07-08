const express = require('express')

const app = express()

// Middleware
app.use(express.static('public'))

// Route
// TODO later

const Port = 30000
app.listen(Port, () => console.log(`Listening: http://localhost:${POST}`))
