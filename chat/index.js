var express = require('express');
var socket = require('socket.io');

// App setup
var app = express(); //invoking the function which is acquired above 

var server = app.listen(4000, function(){
    console.log('Listening at 4000');
})

// Static files

app.use(express.static('public'));

// Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('Connection estab', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data); // it receives the 'data' and trasfers all the data to all the client sockets connected to this server
    });
});