const fs = require('fs');

console.log('Starting Application');

module.exports.addNote = function() {
        fs.appendFileSync('greetings.txt', 'Eureka it works' + '\n');
        return 'Note added';
    }