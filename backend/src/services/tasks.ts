import { Task } from '../types'
import { TaskModel } from '../../models/Tasks'

export const getAllTasksFromFolder = async (FolderId: number): Promise<any> => {
  const data = await TaskModel.findAll({ where: { FolderId: FolderId } })
  return data
}

export const editTask = async (task: Task): Promise<any> => {
  await TaskModel.update({
    content: task.content,
    isChecked: task.isChecked,
    FolderId: task.FolderId
  }, {
    where: {
      id: task.id
    }
  })
}

export const addTask = async (FolderId: number, content: string): Promise<any> => {
  const task = await TaskModel.create({
    content,
    isChecked: false,
    FolderId: FolderId
  })

  if (task == null) {
    throw new Error('CANNOT CREATE TASK')
  }
  return true
}

export const deleteTask = (FolderId: number | null, taskID: number | null): void => {
  void (FolderId !== null ? TaskModel.destroy({ where: { FolderId: FolderId } }) : TaskModel.destroy({ where: { id: taskID } }))
}

export const findById = async (taskId: string): Promise<any> => {
  const task = await TaskModel.findOne({ where: { id: taskId } })

  if (task == null) {
    throw new Error('CANNOT FIND TASK')
  }

  return task
}
