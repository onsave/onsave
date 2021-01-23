'use strict';
let child;
const chokidar = require('chokidar');
const executeCommand = require('./executeCommand');


let onSave = (filePath, usersCommand) => {
  let watcher =  chokidar.watch
  (filePath, {persistent: true});

  watcher.on('change', (filePath) => {
    if (child) child.kill(9); 
    child = executeCommand
    (usersCommand[0], usersCommand.slice(1));
  });
}

module.exports = onSave
