import { watch } from "chokidar";
import executeCommand from "./executeCommand";

//This type is ChildProcess
let child;

let onSave = (filePath: string, usersCommand: string[]) => {
  let watcher = watch(filePath, { persistent: true });

  watcher.on("change", () => {
    if (child) child.kill(9);
    child = executeCommand(usersCommand[0], usersCommand.slice(1));
  });
};

export default onSave;
