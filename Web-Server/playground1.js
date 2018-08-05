const express = require('express');

var app = express();

// app.get('/', function(req,res) {
//     res.send('<h1>Hello Express!</h1>');
// });

// Writing it in the es6 format we have:- 

// app.get('/', (req,res) =>{
//     res.send('Hello express!');
// });

app.get('/', (req, res) => {
    res.send({
        name: 'Nilesh',
        lname : 'Aggarwal',
        age : 20,
    })
})

app.get('/about', (req,res) =>{
    res.send('Welcome to the about of this web page');
})

app.get('/bad', (req,res) =>{
    res.send({
        errorMessage : 'Something bad just happened. Fault is at our end'
    })
})
app.listen(3000);