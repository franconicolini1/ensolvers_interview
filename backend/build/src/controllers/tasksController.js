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
exports.deleteTaskById = exports.editTaskById = exports.getTaskById = void 0;
const taskServices = __importStar(require("../services/tasks"));
const getTaskById = async (req, res) => {
    const task = await taskServices.findById(req.params.taskId);
    task != null ? res.send(task) : res.sendStatus(400);
};
exports.getTaskById = getTaskById;
const editTaskById = (req, res) => {
    const { content, isChecked } = req.body;
    const { taskId, FolderId } = req.params;
    const task = {
        content,
        isChecked,
        id: taskId,
        FolderId
    };
    taskServices.editTask(task)
        .then((ok) => res.send(ok))
        .catch(() => res.sendStatus(400));
};
exports.editTaskById = editTaskById;
const deleteTaskById = (req, _) => {
    const taskId = req.params.taskId;
    taskServices.deleteTask(null, taskId);
};
exports.deleteTaskById = deleteTaskById;
