"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stories_1 = __importDefault(require("./src/routes/stories"));
const utils_1 = require("./src/utils");
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const PORT = 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Middleware that transforms req.body to json
(0, utils_1.createTables)(db_1.default) // Create table if it does not exist
    .then(() => console.log('DATABASE CONNECTED SUCESSFULLY'))
    .catch((e) => console.log(e));
app.use('/api/stories', stories_1.default);
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`);
});
