import { FolderModel } from '../../models/Folders'
import { v4 as uuidv4 } from 'uuid'

export const getAllFolders = async (): Promise<any> => {
  const data = await FolderModel.findAll()
  return data
}

export const addFolder = async (name: string): Promise<any> => {
  const newID = uuidv4()
  const folder = await FolderModel.create({
    id: newID,
    name
  })

  if (folder == null) {
    throw new Error('CANNOT CREATE FOLDER')
  }
  return true
}

export const deleteFolderByName = (name: string): void => {
  void FolderModel.destroy({ where: { name } })
}
