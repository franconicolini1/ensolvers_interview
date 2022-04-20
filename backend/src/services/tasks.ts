import { Task } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { TaskModel } from '../../models/Tasks'

export const getAllTasksFromFolder = async (id: number): Promise<any> => { // FIJARSE
  const data = await TaskModel.findAll({ where: { id } })
  return data
}

export const editTask = async (task: Task): Promise<any> => {
  await TaskModel.update({
    content: task.content,
    isChecked: task.isChecked
  }, {
    where: {
      id: task.id
    }
  })
}

export const addTask = async (content: string): Promise<any> => {
  const newID = uuidv4()
  const task = await TaskModel.create({
    id: newID,
    content,
    isChecked: false
  })

  if (task == null) {
    throw new Error('CANNOT CREATE TASK')
  }
  return true
}

export const deleteTask = (id: string): void => {
  void TaskModel.destroy({ where: { id } })
}

export const findById = async (id: string): Promise<any> => {
  const task = await TaskModel.findOne({ where: { id } })

  if (task == null) {
    throw new Error('CANNOT FIND Task')
  }

  return task
}
