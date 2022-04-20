import { FolderModel } from '../../models/Folders'
import { deleteTask } from './tasks'

export const getAllFolders = async (): Promise<any> => {
  const data = await FolderModel.findAll()
  return data
}

export const addFolder = async (name: string): Promise<any> => {
  const folder = await FolderModel.create({
    name
  })

  if (folder == null) {
    throw new Error('CANNOT CREATE FOLDER')
  }
  return true
}

export const deleteFolderById = (id: number): void => {
  void deleteTask(id, null) // Delete all the tasks inside folder
  void FolderModel.destroy({ where: { id } })
}
