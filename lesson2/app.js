console.log('Starting app.js');

const fs = require('fs');
//const os = require('os');
const notes = require('./notes.js');

//fs.appendFileSync('greetings.txt', 'You are ${notes.age}');

// var res = notes.addNote();
// console.log(res);

//Given below is method 2 to do above 
// var result = notes.add(9,-1);
// console.log(result);


console.log('Result:',notes.add(9,-2));