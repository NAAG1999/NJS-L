const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('<h1>GET request to the homepage</h1>');
})

app.listen(3000);