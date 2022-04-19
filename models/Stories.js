import db from '../config/db.js'
import { DataTypes } from 'sequelize'
import { FolderModel } from './Folders'

export const StoryModel = db.define('Story', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Content cannot be empty'
      }
    },
    unique: {
      msg: 'Content already used'
    }
  },
  checked: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
})

StoryModel.belongsTo(FolderModel)
