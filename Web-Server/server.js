const express = require('express');
const hbs = require('hbs');

var app = express();

//partials are used to re-use that  piece of info from our view files
hbs.registerPartials(__dirname + '/views/partials')

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

//NOTE: When using footers, when we are restarting our server, then in the terminal we have to use the command
// nodemon server.js -e js,hbs ..... Last two being the args which you want to see the output of ;)