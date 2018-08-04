const fs = require('fs');

console.log('Starting Application');

module.exports.addNums = function(a,b) {
        //fs.appendFileSync('greetings.txt', 'Eureka it works' + '\n');
        
        return a+b;
    }