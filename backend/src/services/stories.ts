import { Story } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { StoryModel } from '../../models/Stories'

export const getAllStoriesFromFolder = async (folder: string): Promise<any> => { // FIJARSE
  const data = await StoryModel.findAll({ where: { folder } })
  return data
}

export const editStory = async (story: Story): Promise<any> => {
  await StoryModel.update({
    content: story.content,
    isChecked: story.isChecked
  }, {
    where: {
      id: story.id
    }
  })
}

export const addStory = async (content: string): Promise<any> => {
  const newID = uuidv4()
  const story = await StoryModel.create({
    id: newID,
    content,
    isChecked: false
  })

  if (story == null) {
    throw new Error('CANNOT CREATE STORY')
  }
  return true
}

export const deleteStory = (id: string): void => {
  void StoryModel.destroy({ where: { id } })
}

export const findById = async (id: string): Promise<any> => {
  const story = await StoryModel.findOne({ where: { id } })

  if (story == null) {
    throw new Error('CANNOT FIND STORY')
  }

  return story
}
