var Sequelize = require('sequelize')
var connection = new Sequelize('demo_schema', 'root', 'password'); // demo_schmea --> name of database, username, password

var Article = connection.define('article',{
    title: Sequelize.STRING,
    body: Sequelize.TEXT
});