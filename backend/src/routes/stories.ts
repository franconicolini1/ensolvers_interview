import express from 'express'
import { addNewFolder, getAllFolders, getAllFolderTasks, deleteFolderById, addNewTaskToFolder } from '../controllers/foldersController'
import { editTaskById, getTaskById } from '../controllers/tasksController'

const router = express.Router()

router.get('/', getAllFolders)
router.post('/', addNewFolder)

router.get('/:folderID', getAllFolderTasks)
router.post('/:folder', addNewTaskToFolder)
router.delete('/:id', deleteFolderById)

router.get('/:folder/:id', getTaskById)
router.post('/:folder/:id', editTaskById)

export default router
