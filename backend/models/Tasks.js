import db from '../config/db.js'
import { DataTypes } from 'sequelize'
import { FolderModel } from './Folders'

export const TaskModel = db.define('Task', {
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
  isChecked: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
})

TaskModel.belongsTo(FolderModel)
