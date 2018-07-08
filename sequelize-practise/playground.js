var Sequelize = require('sequelize');

//var connection = new Sequelize('demo_schema', 'root', ''); This method is deprecated
var connection = new Sequelize('demo_schema', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

var Article = connection.define('article',{
    slug:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    approved : {
        type: Sequelize.BOOLEAN,
        defaultValue : false
    }
},);

connection
    .sync({
        force: true
    })
    .then(function(){
        var req = {
            body: {
                approved: true,
                slug: "some slug",
                title: "Some title",
                body: "Some body"
            }
        }
    Article.create(req.body).then(function(insertedArticle){
        console.log(insertedArticle.defaultValues);
        })
    })  
    .catch(function(error){
        console.log(error);
    })