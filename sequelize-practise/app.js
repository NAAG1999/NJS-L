var Sequelize = require('sequelize');
//var connection = new Sequelize('demo_schema', 'root', 'password'); // demo_schmea --> name of database, username, password

var connection = new Sequelize('demo_schema', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

var Article = connection.define('article',{
    title: Sequelize.STRING,
    body: Sequelize.TEXT
});

connection.sync().then(function(){
  Article.create({
    title: 'demo title',  
    body: 'Lorem ipsum fdsadsd'
  });
});

// connection.sync().then(function(){
//   Article.create({
//     title: 'demo title',  
//     body: 'asdad Lorem ipsum fdsadsd'
//   });
// });

// connection.sync().then(function(){
//   Article.findAll().then(function(articles){
//     console.log(articles.length);
//   });
// });