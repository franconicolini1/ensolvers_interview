import db from '../config/db.js'
import { DataTypes } from 'sequelize'

export const FolderModel = db.define('Folder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    unique: {
      msg: 'Name already used'
    },
    allowNull: false
  }
})
