console.log('Starting notes.js');

const fs = require('fs');//core module

var fetchNotes =() =>{
    // Below line of code reads the data from the note-data.json file and converts into object 
    // from which we can access the properties of the object
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
    
};

var saveNotes =(notes) =>{

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var addNote = (title, body) =>{
    var notes = fetchNotes(); //this is an array of notes where our data will be stored
    var note = {
        title: title,
        body : body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    //non es6 way to do above thing is :-
        // var duplicateNotes = notes.filter((note) => {
        //     return note.title === title;
        // } 
    //Below line of code saves our data into a notes-data.json file
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll =() =>{
    console.log("Getting all nodes");
};
var getNote = (title) =>{
    console.log('Getting note', title);
};

var removeNote = (title) =>{
    console.log("Removing note", title);
};
 
module.exports = {
    addNote: addNote,//non ES6 method to define our method
    getAll, // this is method used in ES6 to define our method 
    getNote,
    removeNote,
};

//NOTE: To see the use of module.exports in js file 
//try commenting out the module.exports and running the file in the command prompt
//Module.exports is used to export the files in the the different file which requires certain methods
// from the notes.js file
// refer http://www.tutorialsteacher.com/nodejs/nodejs-module-exports
