#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const onSave2_1 = require("./lib/onSave2");
//Get File Path
let filePath = path_1.resolve(process.argv[2]);
console.debug(filePath);
//Get command
const usersCommand = process.argv.slice(3);
//Message
console.log(`    Listening To: ${process.argv[2]}\nListener Command: ${usersCommand.join(" ")}`);
// set the listener
onSave2_1.default(filePath, usersCommand);
//# sourceMappingURL=cli.js.map