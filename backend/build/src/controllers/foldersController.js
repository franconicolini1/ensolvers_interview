"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewTaskToFolder = exports.deleteFolderById = exports.addNewFolder = exports.getAllFolderTasks = exports.getAllFolders = void 0;
const folderServices = __importStar(require("../services/folders"));
const taskServices = __importStar(require("../services/tasks"));
const getAllFolders = (_, res) => {
    folderServices
        .getAllFolders()
        .then((data) => res.send(data))
        .catch(() => res.sendStatus(400));
};
exports.getAllFolders = getAllFolders;
const getAllFolderTasks = (req, res) => {
    taskServices
        .getAllTasksFromFolder(+req.params.FolderId)
        .then((data) => res.send(data))
        .catch(() => res.sendStatus(400));
};
exports.getAllFolderTasks = getAllFolderTasks;
const addNewFolder = (req, res) => {
    const { name } = req.body;
    if (name === undefined)
        return res.sendStatus(400);
    const newtaskEntry = folderServices.addFolder(name);
    return res.json(newtaskEntry);
};
exports.addNewFolder = addNewFolder;
const deleteFolderById = (req, _) => {
    folderServices.deleteFolderById(+req.params.FolderId);
    taskServices.deleteTask(+req.params.FolderId, null);
};
exports.deleteFolderById = deleteFolderById;
const addNewTaskToFolder = (req, res) => {
    const { content } = req.body;
    const FolderId = req.params.FolderId;
    if (FolderId === null) {
        return res.sendStatus(400);
    }
    const newtaskEntry = taskServices.addTask(FolderId, content);
    res.json(newtaskEntry);
};
exports.addNewTaskToFolder = addNewTaskToFolder;
