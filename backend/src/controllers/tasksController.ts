import * as taskServices from '../services/tasks'
import { Task } from '../types'

export const getTaskById = async (req: any, res: any): Promise<any> => {
  const task = await taskServices.findById(req.params.taskId)
  task != null ? res.send(task) : res.sendStatus(400)
}

export const editTaskById = (req: any, res: any): void => {
  const { content, isChecked } = req.body
  const { taskId, FolderId } = req.params

  const task = {
    content,
    isChecked,
    id: taskId,
    FolderId
  } as unknown as Task

  taskServices.editTask(task)
    .then((ok) => res.send(ok))
    .catch(() => res.sendStatus(400))
}

export const deleteTaskById = (req: any, _: any): void => {
  const taskId = req.params.taskId
  taskServices.deleteTask(null, taskId)
}
