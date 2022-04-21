"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderModel = void 0;
const db_js_1 = __importDefault(require("../config/db.js"));
const sequelize_1 = require("sequelize");
exports.FolderModel = db_js_1.default.define('Folder', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        unique: {
            msg: 'Name already used'
        },
        allowNull: false
    }
});
