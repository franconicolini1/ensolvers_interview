import express from 'express'
import { addNewFolder, getAllFolders, getAllFolderTasks, deleteFolderById, addNewTaskToFolder } from '../controllers/foldersController'
import { editTaskById, getTaskById, deleteTaskById } from '../controllers/tasksController'

const router = express.Router()

router.get('/', getAllFolders)
router.post('/', addNewFolder)

router.get('/:FolderId', getAllFolderTasks)
router.post('/:FolderId', addNewTaskToFolder)
router.delete('/:FolderId', deleteFolderById)

router.get('/:FolderId/:taskId', getTaskById)
router.post('/:FolderId/:taskId', editTaskById)
router.delete('/:FolderId/:taskId', deleteTaskById)

export default router
