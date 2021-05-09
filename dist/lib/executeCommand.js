"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function executeCommand(command, optionsArray) {
    return child_process_1.spawn(command, optionsArray, {
        stdio: ["inherit", "inherit", "inherit"],
    });
}
exports.default = executeCommand;
//# sourceMappingURL=executeCommand.js.map