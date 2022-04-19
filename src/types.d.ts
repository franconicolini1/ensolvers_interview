export interface Story {
  id: string
  isChecked: boolean
  content: string
}

export type newStory = Omit<Story, 'id'>
