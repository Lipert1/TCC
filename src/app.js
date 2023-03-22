import express from 'express'
import routes from './routes.js'
import db from '../config/db.js'

const app = express()
const port = 3000

app.use(express.json())
app.use('/', routes)

app.listen(port, async () => {
    await db()

    console.log('API running on port 3000 🔥')
})