import * as taskServices from '../services/tasks'
import { Task } from '../types'

export const getTaskById = (req: any, res: any): void => {
  const task = taskServices.findById(req.params.id)
  task != null ? res.send(task) : res.sendStatus(404)
}

export const editTaskById = (req: any, res: any): void => {
  const { content, isChecked } = req.body
  const { taskId, FolderId } = req.params
  console.log(isChecked)

  const task = {
    content,
    isChecked,
    id: taskId,
    FolderId
  } as unknown as Task

  console.log(task.isChecked)

  taskServices.editTask(task)
    .then((ok) => res.send(ok))
    .catch((e) => console.log(e))
}

export const deleteTaskById = (req: any, _: any): void => {
  const taskId = req.params.taskId
  taskServices.deleteTask(null, taskId)
}
