var getUser = (id, callback) => {
    var user ={
        id: id,
        name: 'Nilesh'
    };
    callback();
};

getUser(201, (user) =>{
    console.log(user);
});