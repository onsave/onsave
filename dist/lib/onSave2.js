"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chokidar_1 = require("chokidar");
const executeCommand_1 = require("./executeCommand");
//This type is ChildProcess
let child;
let onSave = (filePath, usersCommand) => {
    let watcher = chokidar_1.watch(filePath, { persistent: true });
    watcher.on("change", () => {
        if (child)
            child.kill(9);
        child = executeCommand_1.default(usersCommand[0], usersCommand.slice(1));
    });
};
exports.default = onSave;
//# sourceMappingURL=onSave2.js.map