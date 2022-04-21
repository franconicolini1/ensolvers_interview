"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFolderById = exports.addFolder = exports.getAllFolders = void 0;
const Folders_1 = require("../../models/Folders");
const tasks_1 = require("./tasks");
const getAllFolders = async () => {
    const data = await Folders_1.FolderModel.findAll();
    return data;
};
exports.getAllFolders = getAllFolders;
const addFolder = async (name) => {
    const folder = await Folders_1.FolderModel.create({
        name
    });
    if (folder == null) {
        throw new Error('CANNOT CREATE FOLDER');
    }
    return true;
};
exports.addFolder = addFolder;
const deleteFolderById = (id) => {
    void (0, tasks_1.deleteTask)(id, null); // Delete all the tasks inside folder
    void Folders_1.FolderModel.destroy({ where: { id } });
};
exports.deleteFolderById = deleteFolderById;
