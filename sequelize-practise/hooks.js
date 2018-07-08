var Sequelize = require('sequelize');

var connection = new Sequelize('demo_schema', 'root', '');

var Article = connection.define('article',{
    slug:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: Sequelize.STRING,
    body: Sequelize.TEXT
},{

});

connection
    .sync({
        force: true
    })
    .then(function(){

    })
    .catch(function(error){
        console.log(error);
    })