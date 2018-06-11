console.log('Starting app.js');

const fs = require('fs');// 3rd party modules
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes1.js');//modules we created


const argv = yargs.argv;// returns an array containing the command line arguments passed to it
var command = argv._[0];// var command = process.argv[2];
console.log('Command:', command);
//console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}   else if(command === 'list'){
    notes.getAll();
}   else if(command === 'read'){
    notes.getNote(argv.title);
}   else if(command === 'remove'){
    notes.removeNote(argv.title);
}   else{
    console.log('Command not found!');
}
    