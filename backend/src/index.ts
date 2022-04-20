import express from 'express'
import storiesRouter from './routes/stories'
import { createTables } from './utils'
import db from '../config/db'
import cors from 'cors'

const PORT = 3001
const app = express()

app.use(cors())

app.use(express.json()) // Middleware that transforms req.body to json

createTables(db) // Create table if it does not exist
  .then(() => console.log('DATABASE CONNECTED SUCESSFULLY'))
  .catch((e: any) => console.log(e))

app.use('/api/stories', storiesRouter)

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`)
})
