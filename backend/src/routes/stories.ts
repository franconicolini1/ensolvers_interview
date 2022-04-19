import express from 'express'
import * as storyServices from '../services/stories'
import * as folderServices from '../services/folders'
import { Story } from '../types'
import { strToBoolean } from '../utils'

const router = express.Router()

router.get('/', (_, res) => { // Get all folders
  res.send(folderServices.getAllFolders())
})

router.get('/:folder', (req, res) => { // Get all folder stories
  res.send(storyServices.getAllStoriesFromFolder(req.params.folder))
})

router.get('/:folder/:id', (req, res) => { // Get story by id
  const story = storyServices.findById(req.params.id)
  return story != null ? res.send(story) : res.sendStatus(404)
})

router.post('/', (req, res) => { // Add new Folder
  const { name } = req.body
  const newStoryEntry = folderServices.addFolder(name)

  res.json(newStoryEntry)
})

router.delete('/', (req, _) => { // Delete folder
  const { name } = req.body
  folderServices.deleteFolderByName(name)
})

router.post('/:folder', (req, res) => { // Add new story
  const { content } = req.body
  const newStoryEntry = storyServices.addStory(content)

  res.json(newStoryEntry)
})

router.post('/:folder/:id', (req, _) => { // Edit story
  const { content, isChecked } = req.body
  const id = req.params.id

  const story: Story = {
    content,
    isChecked: strToBoolean(isChecked),
    id
  }

  void storyServices.editStory(story)
})

export default router
