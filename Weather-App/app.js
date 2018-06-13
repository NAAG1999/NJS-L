const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA',
    json: true 
}, (error, response, body) =>{
    console.log(JSON.stringify(body, undefined, 2));
});