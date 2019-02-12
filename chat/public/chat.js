// Establish the client connection with socket.io

var socket = io.connect('http://localhost:4000');

// Query DOM

// What JS is doing is it will get the data from the index.html file using JS functions 
// which are document.getElementById('HTML element here')

// Now these values are stored in the variable declared in the chat.js file Javascript variable and are
// local to it

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// Java click events now
// we are sending the data to socket.io at client side
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});
// now that we have sent the data to the socket.io at server side
// now we have to handle the data at the server and hence at index.js 

// Listen for events

socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});