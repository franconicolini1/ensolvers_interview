import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')

export const StoryModel = sequelize.define('User', {
  id: DataTypes.STRING,
  content: DataTypes.STRING,
  checked: DataTypes.BOOLEAN
})
