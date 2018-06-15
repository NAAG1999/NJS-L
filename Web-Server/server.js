const express = require('express');

var app = express();

app.get('/', function(req, res){
    //res.send('<h1>GET request to the homepage</h1>');
    res.send({
        name: 'Nilesh',
        age: 18,
        likes: [
            'coding',
            'playing'
        ]
    });
})

app.get('/bad', function(req,res){
    res.send({
        errorMessage:'Bad Request 404'
    });
})

app.listen(3000);

