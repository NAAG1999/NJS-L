const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('GET request to the homepage');
})

app.listen(3000);