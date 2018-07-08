var Sequelize = require('sequelize');

//var connection = new Sequelize('demo_schema', 'root', ''); This method is deprecated


var Article = connection.define('article',{
    slug:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: Sequelize.STRING,
    body: Sequelize.TEXT
},{
    hooks:{
        beforeValidate: function(){
            console.log("Before Validation");
        },
        afterValidate: function(){
            console.log("After Validation");
        },
        beforeCreate: function(){  
            console.log("Before Creation");
        },
        afterCreate: function(){
            console.log("After Creation");
        }

    }
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