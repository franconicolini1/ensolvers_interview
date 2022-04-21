import * as folderServices from '../services/folders'
import * as taskServices from '../services/tasks'

export const getAllFolders = (_: any, res: any): void => {
  folderServices
    .getAllFolders()
    .then((data: any) => res.send(data))
    .catch(() => res.sendStatus(400))
}

export const getAllFolderTasks = (req: any, res: any): void => {
  taskServices
    .getAllTasksFromFolder(+req.params.FolderId)
    .then((data: any) => res.send(data))
    .catch(() => res.sendStatus(400))
}

export const addNewFolder = (req: any, res: any): void => {
  const { name } = req.body
  if (name === undefined) return res.sendStatus(400)

  const newtaskEntry = folderServices.addFolder(name)
  return res.json(newtaskEntry)
}

export const deleteFolderById = (req: any, _: any): void => {
  folderServices.deleteFolderById(+req.params.FolderId)
  taskServices.deleteTask(+req.params.FolderId, null)
}

export const addNewTaskToFolder = (req: any, res: any): void => {
  const { content } = req.body
  const FolderId = req.params.FolderId
  if (FolderId === null) {
    return res.sendStatus(400)
  }

  const newtaskEntry = taskServices.addTask(FolderId, content)

  res.json(newtaskEntry)
}
