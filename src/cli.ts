#!/usr/bin/env node
"use strict";
import { resolve } from "path";
import onSave from "./lib/onSave2";

//Get File Path
let filePath = resolve(process.argv[2]);
console.debug(filePath);
//Get command
const usersCommand = process.argv.slice(3);

//Message
console.log(
  `    Listening To: ${process.argv[2]}\nListener Command: ${usersCommand.join(
    " "
  )}`
);

// set the listener
onSave(filePath, usersCommand);
