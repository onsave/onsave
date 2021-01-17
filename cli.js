#!/usr/bin/env node
'use strict';
const { relative } = require('path');
const onSave = require('./lib/onSave2.js');

//Get File Path
const filePath = relative('/', process.argv[2]);

//Get command
const usersCommand = process.argv.slice(3);

//Message 
console.log(`    Listening To: ${ process.argv[2]}\nListener Command: ${usersCommand.join(' ')}`);

// set the listener
onSave(filePath, usersCommand);












