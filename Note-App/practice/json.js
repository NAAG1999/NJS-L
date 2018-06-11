const fs = require('fs');

var originalNote = {
    title: 'Title',
    body: 'text'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note.title);


//Note : LOGIC BEHIND USING JSON

// we are first converting our object originalNote to the string formaat using stringify function of JSON
// conerting it to string file makes our object to JSON type file and after converting it to object
// we save its content into a json file named as notes.json using writeFileSync method

//when we execute this file, then a separate file named notes.json will be creatd which will be having the contents of our obj -> (originalNote)

// saving in this format means, we have converted our object into a text format hence, we can now read from this JSON file (notes.json)
// now from the json file created we are reading/fetching its content using readFileSync
// we can not use the properties of an object unless its in the object form
// here we have the form of object in the texxt form .json extension
//hence we convert it from .json to our object format using parse methd of JSON
// after converting, we have accessed its title property from the originalNote object.

// USE??

// we will first convert our object ( in which all the properties will be inputted by us) 
    //syntax 

    // var originalNote = {
    //     title: 'Title',
    //     body: 'text'
    // };
    
//and then wew cnvert this bject to the text format (.json type) to store our data in a file
// after that we access the contents of the file by again converting it to the object format and then accessing the contents of the object