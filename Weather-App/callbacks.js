var getUser = (id, callback) => {
    var user ={
        id: id,
        name: 'Nilesh'
    };
    callback(user);
};

getUser(201, (user) =>{
    console.log(user);
});