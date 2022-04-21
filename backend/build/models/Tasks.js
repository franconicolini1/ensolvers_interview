"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const db_js_1 = __importDefault(require("../config/db.js"));
const sequelize_1 = require("sequelize");
const Folders_1 = require("./Folders");
exports.TaskModel = db_js_1.default.define('Task', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Content cannot be empty'
            }
        }
    },
    isChecked: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
});
exports.TaskModel.belongsTo(Folders_1.FolderModel);
