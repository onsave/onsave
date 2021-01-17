'use strict';
const { spawn } = require('child_process');
function executeCommand(command, optionsArray) {
  spawn(command , optionsArray, {
    stdio: ['inherit', 'inherit', 'inherit']
  });
}

module.exports = executeCommand


