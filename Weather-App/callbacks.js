var getUser = (id, callback) => {
    var user ={
        id: id,
        name: 'Nilesh'
    };

    setTimeout(() =>{
        callback(user);
    }, 2000);
};

getUser(201, (user) =>{
    console.log(user);
});
