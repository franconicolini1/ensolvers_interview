export interface Story {
  id: number
  checked: boolean
  content: string
}

export type newStory = Omit<Story, 'id'>
