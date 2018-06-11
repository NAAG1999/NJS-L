console.log('Starting app.js');

const fs = require('fs');// 3rd party modules
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');//modules we created


const argv = yargs.argv;// returns an array containing the command line arguments passed to it
var command = argv._[0];// var command = process.argv[2];
console.log('Command:', command);
//console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("note created");
        console.log("Content of Note created are:- ");
        console.log("Title: ", note.title);
        console.log("Body: ", note.body);
    } else{
        console.log("Note already created with same title");
    }
}   else if(command === 'list'){
    notes.getAll();
}   else if(command === 'read'){
    notes.getNote(argv.title);
}   else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note was not removed'
    console.log(message);
}   else{
    console.log('Command not found!');
}
    