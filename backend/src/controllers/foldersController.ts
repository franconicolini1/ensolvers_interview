import * as folderServices from '../services/folders'
import * as taskServices from '../services/tasks'

export const getAllFolders = (_: any, res: any): void => {
  folderServices
    .getAllFolders()
    .then((data: any) => res.send(data))
    .catch((e: any) => console.log(e))
}

export const getAllFolderTasks = (req: any, res: any): void => {
  res.send(taskServices.getAllTasksFromFolder(+req.params.folderID))
}

export const addNewFolder = (req: any, res: any): void => {
  const { name } = req.body
  if (name === undefined) return res.sendStatus(400)

  const newtaskEntry = folderServices.addFolder(name)
  return res.json(newtaskEntry)
}

export const deleteFolderById = (req: any, _: any): void => {
  folderServices.deleteFolderById(+req.params.id)
}

export const addNewTaskToFolder = (req: any, res: any): void => {
  const { content } = req.body
  const newtaskEntry = taskServices.addTask(content)

  res.json(newtaskEntry)
}
