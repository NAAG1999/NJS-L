console.log('Starting app');

const fs = require('fs');

const notes = require('./notes1.js');

var res = notes.addNote();
console.log(res);
