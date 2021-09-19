import * as express from 'express'
export const app = express()

app.get('/', (req, res) => res.send('Hello from Cloud Functions'))
app.get('/chesse', (req, res) => res.send('cheese'))
