const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA',
    json: true 
}, (error, response, body) =>{
    console.log('Address: ${body.results[0].formatted_address}');
});
//in the console log statement we can swap body with error, response and body itself, to print the required element in our output
//body is a part of http request: core data that comes from the http request
//error contains error related to our http request ex: domain name is wrong
