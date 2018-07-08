var Sequelize = require('sequelize');
//var connection = new Sequelize('demo_schema', 'root', 'password'); // demo_schmea --> name of database, username, password

var connection = new Sequelize('demo_schema', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

var Article = connection.define('article',{
    slug:{
      type: Sequelize.STRING,
      // NOTE that setting slug as primarykey: true will remove the id column
      //      and will set the slug as primary in the mysql workbench
      primaryKey : true 
    },
    title: {
      type: Sequelize.STRING,
      unique: true,
      //allowNull: false, // That title is a must required thing
      validate:{
        len: {
          args: [10, 150],
          msg: 'Please enter a valid title'
        }
      }
    },
    //body: Sequelize.TEXT
    body :{
      type: Sequelize.TEXT,
      defaultValue: 'Coming soon...',   //will assume a defualt value if nothing supplied as body
      validate: {
        startsWithUpper: function(bodyVal){
          var first = bodyVal.charAt(0);
          var startsWithUpper = first === first.toUpperCase();
          if(!startsWithUpper){
            throw new Error("First letter must be capital letter.")
          }else{
              //....
            }
          }
        }
      }
},{
      timestamps : false // disables the timestamps from the databse
});
// NOTE: sync function can not update the table, it can only create table ;)

connection
    .sync({
      force : true,
      logging: console.log()  
    })
    .then(function(){
      return Article.create({
        title: "lnfskjvbxcbas",
        slug: 'wibble',
        body: 'Wooble'
    })
    })
    .catch(function(error){
      console.log(error);
    });


// connection.sync().then(function(){
//   Article.create({
//     title: 'demo title',  
//     body: 'Lorem ipsum fdsadsd'
//   });
// });

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