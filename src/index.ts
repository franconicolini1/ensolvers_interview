import express from 'express'
import storiesRouter from './routes/stories'

const app = express()

app.use(express.json()) // Middleware that transforms req.body to json

const PORT = 3000

app.use('/api/stories', storiesRouter)

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`)
})
