import express from 'express'
import * as storyServices from '../services/stories'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(storyServices.getAllStories())
})

router.get('/:id', (req, res) => {
  const story = storyServices.findById(req.params.id)
  return story != null ? res.send(story) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { content, checked } = req.body

  const newStoryEntry = storyServices.addStory({
    content,
    checked
  }
  )

  res.json(newStoryEntry)
})

export default router
