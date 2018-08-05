const express = require('express');

var app = express();

app.get('/', function(req,res) {
    res.send('<h1>Hello Express!</h1>');
});

// Writing it in the es6 format we have:- 

// app.get('/', (req,res) =>{
//     res.send('Hello express!');
// });

app.listen(3000);