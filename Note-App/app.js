console.log('Starting app.js');

const fs = require('fs');// 3rd party modules
const _ = require('lodash');

const notes = require('./notes.js');//modules we created

var command = process.argv[2];// returns an array containing the command line arguments passed to it
console.log('Command:', command);

if(command === 'add'){
    console.log('Adding new note');
}   else if(command === 'list'){
    console.log('Listing all nodes');
}   else if(command === 'read'){
    console.log('Reading note');
}   else if(command === 'remove'){
    console.log('Removing note');
}   else{
    console.log('Command not found!');
}
    