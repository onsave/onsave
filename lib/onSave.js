#!/usr/bin/env node
'use strict';

const chokidar = require('chokidar');
const { join } = require('path');
const executeCommand = require
('./executeCommand.js');

// Get the File path
let filePath = join(__dirname, process.argv[2]);

// Get the command
const usersCommand = process.argv
.slice(3);


// Set the command up as a listener
const watcher = chokidar.watch(filePath, {persistent: true})

watcher.on('change', (filePath) => {
  executeCommand(usersCommand[0], usersCommand.slice(1));
});

