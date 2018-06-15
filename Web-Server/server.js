const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('home.hbs', {
        pageTitle: 'Welcome Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hello User'
    });
})

app.get('/about', function(req,res){
    res.render('about.hbs',{    //injecting data using render method
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.get('/bad', function(req,res){
    res.send({
        errorMessage:'Bad Request 404'
    });
});

app.listen(3000, function(){
    console.log('server is up on port 3000');
});

