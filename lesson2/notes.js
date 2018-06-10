console.log('Starting notes.js');

// //console.log(module);

// module.exports.addNote =() => { // ES6 version of function
//     console.log('addNote');
//     return 'hello';
// }

module.exports.add = function(a, b){
    console.log("adding two numbers");
    return a+b;
}