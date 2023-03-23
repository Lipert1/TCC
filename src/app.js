import express from 'express'
import routes from './routes.js'
import db from '../config/db.js'
import Logger from '../config/logger.js'
import morgan from 'morgan'

const app = express()
const port = 3000

app.use(morgan('tiny'));
app.use(express.json())
app.use('/', routes)

app.listen(port, async () => {
    await db()

    Logger.info('App rodando na porta 3000 🔥')
})