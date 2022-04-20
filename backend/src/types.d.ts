export interface Task {
  id: string
  isChecked: boolean
  content: string
}

export type newTask = Omit<Task, 'id'>
