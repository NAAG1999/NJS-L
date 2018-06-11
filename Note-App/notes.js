console.log('Starting notes.js');

var addNote = (title, body) =>{
    console.log('Adding note', title, body);
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
    removeNote
};

//NOTE: To see the use of module.exports in js file 
//try commenting out the module.exports and running the file in the command prompt
//Module.exports is used to export the files in the the different file which requires certain methods
// from the notes.js file
// refer http://www.tutorialsteacher.com/nodejs/nodejs-module-exports




