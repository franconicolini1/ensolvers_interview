export interface Task {
  id: number
  isChecked: boolean
  content: string
  FolderId: number
}

export type newTask = Omit<Task, 'id'>
