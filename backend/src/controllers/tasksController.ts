import * as taskServices from '../services/tasks'
import { strToBoolean } from '../utils'

export const getTaskById = (req: any, res: any): void => {
  const task = taskServices.findById(req.params.id)
  task != null ? res.send(task) : res.sendStatus(404)
}

export const editTaskById = (req: any, res: any): void => {
  const { content, isChecked } = req.body
  const id = req.params.id

  const task = {
    content,
    isChecked: strToBoolean(isChecked),
    id
  }

  taskServices.editTask(task)
    .then((ok) => res.send(ok))
    .catch(() => res.sendStatus(400))
}
