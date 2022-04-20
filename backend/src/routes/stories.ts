import express from 'express'
import * as taskServices from '../services/tasks'
import * as folderServices from '../services/folders'
import { Task } from '../types'
import { strToBoolean } from '../utils'

const router = express.Router()

router.get('/', (_, res) => { // Get all folders
  folderServices.getAllFolders()
    .then((data) => res.send(data))
    .catch(e => console.log(e))
})

router.get('/:folderID', (req, res) => { // Get all folder tasks
  res.send(taskServices.getAllTasksFromFolder(+req.params.folderID))
})

router.get('/:folder/:id', (req, res) => { // Get task by id
  const task = taskServices.findById(req.params.id)
  return task != null ? res.send(task) : res.sendStatus(404)
})

router.post('/', (req, res) => { // Add new Folder
  const { name } = req.body
  if (name === undefined) return res.sendStatus(400)

  const newtaskEntry = folderServices.addFolder(name)

  return res.json(newtaskEntry)
})

router.delete('/:id', (req, _) => { // Delete folder
  folderServices.deleteFolderById(+req.params.id)
})

router.post('/:folder', (req, res) => { // Add new task
  const { content } = req.body
  const newtaskEntry = taskServices.addTask(content)

  res.json(newtaskEntry)
})

router.post('/:folder/:id', (req, _) => { // Edit task
  const { content, isChecked } = req.body
  const id = req.params.id

  const task: Task = {
    content,
    isChecked: strToBoolean(isChecked),
    id
  }

  void taskServices.editTask(task)
})

export default router
