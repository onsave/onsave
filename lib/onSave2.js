'use strict';

const chokidar = require('chokidar');
const executeCommand = require('./executeCommand');


let onSave = (filePath, usersCommand) => {
  let watcher =  chokidar.watch
  (filePath, {persistent: true});

  watcher.on('change', (fliePath) => {
    executeCommand(usersCommand[0], usersCommand.slice(1));
  });
}

module.exports = onSave
