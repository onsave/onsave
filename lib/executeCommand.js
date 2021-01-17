'use strict';
const { spawn } = require('child_process');
function executeCommand(command, optionsArray) {
  console.log('command' , command);
  console.log('options', optionsArray);
  spawn(command , optionsArray, {
    stdio: ['inherit', 'inherit', 'inherit']
  });
}

module.exports = executeCommand


