"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foldersController_1 = require("../controllers/foldersController");
const tasksController_1 = require("../controllers/tasksController");
const router = express_1.default.Router();
router.get('/', foldersController_1.getAllFolders);
router.post('/', foldersController_1.addNewFolder);
router.get('/:FolderId', foldersController_1.getAllFolderTasks);
router.post('/:FolderId', foldersController_1.addNewTaskToFolder);
router.delete('/:FolderId', foldersController_1.deleteFolderById);
router.get('/:FolderId/:taskId', tasksController_1.getTaskById);
router.post('/:FolderId/:taskId', tasksController_1.editTaskById);
router.delete('/:FolderId/:taskId', tasksController_1.deleteTaskById);
exports.default = router;
