"use strict";
import { spawn } from "child_process";
function executeCommand(command: string, optionsArray: string[]) {
  return spawn(command, optionsArray, {
    stdio: ["inherit", "inherit", "inherit"],
  });
}

export default executeCommand;
