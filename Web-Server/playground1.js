const express = require('express');

var app = express();

//using middlewares

app.use(express.static(__dirname + '/public'));

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
    res.render('about.hbs');
})

app.get('/bad', (req,res) =>{
    res.send({
        errorMessage : 'Something bad just happened. Fault is at our end'
    })
})
// app.listen(3000, () =>{
//     console.log('Server is up and running on port 3000')
// });

app.listen(3000, function(){
    console.log("Server is up and running on port 3000");
});