console.log('Starting app');

const fs = require('fs');

const notes = require('./notes1.js');

// var res = notes.addNums(7,-9);
// console.log(res);

//console.log('Result: ', notes.addNums(7,-2));
var command = process.argv[2];
console.log('Command: ' + command);

if(command === 'add'){
    console.log('Adding new node');
} else if (command === 'list'){
    console.log('Listing all nodes');
} else{
    console.log('Command not recgonized');
}