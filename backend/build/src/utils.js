"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTables = void 0;
const createTables = async (db) => {
    await db.sync();
};
exports.createTables = createTables;
