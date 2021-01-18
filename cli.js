#!/usr/bin/env node
'use strict';
const { relative, isAbsolute, join } = require('path');
const onSave = require('./lib/onSave2.js');

//Get File Path
let filePath = relative('/', process.argv[2]);
if (!isAbsolute(filePath)) {
  filePath = join('/', filePath);
}
//Get command
const usersCommand = process.argv.slice(3);


//Message 
console.log(`    Listening To: ${ process.argv[2]}\nListener Command: ${usersCommand.join(' ')}`);

// set the listener
onSave(filePath, usersCommand);












