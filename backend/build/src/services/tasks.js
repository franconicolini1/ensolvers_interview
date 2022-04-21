"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.deleteTask = exports.addTask = exports.editTask = exports.getAllTasksFromFolder = void 0;
const Tasks_1 = require("../../models/Tasks");
const getAllTasksFromFolder = async (FolderId) => {
    const data = await Tasks_1.TaskModel.findAll({ where: { FolderId: FolderId } });
    return data;
};
exports.getAllTasksFromFolder = getAllTasksFromFolder;
const editTask = async (task) => {
    await Tasks_1.TaskModel.update({
        content: task.content,
        isChecked: task.isChecked,
        FolderId: task.FolderId
    }, {
        where: {
            id: task.id
        }
    });
};
exports.editTask = editTask;
const addTask = async (FolderId, content) => {
    const task = await Tasks_1.TaskModel.create({
        content,
        isChecked: false,
        FolderId: FolderId
    });
    if (task == null) {
        throw new Error('CANNOT CREATE TASK');
    }
    return true;
};
exports.addTask = addTask;
const deleteTask = (FolderId, taskID) => {
    void (FolderId !== null ? Tasks_1.TaskModel.destroy({ where: { FolderId: FolderId } }) : Tasks_1.TaskModel.destroy({ where: { id: taskID } }));
};
exports.deleteTask = deleteTask;
const findById = async (taskId) => {
    const task = await Tasks_1.TaskModel.findOne({ where: { id: taskId } });
    if (task == null) {
        throw new Error('CANNOT FIND TASK');
    }
    return task;
};
exports.findById = findById;
