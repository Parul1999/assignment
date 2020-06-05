'use strict';
const mongoose=require('mongoose');
function connect(){
    mongoose.connect("mongodb+srv://RMbook:Parul99@cluster0-g7fwp.mongodb.net/test",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
    });
    const connection=mongoose.connection;
    connection.on('error',function(err){
        console.log("server is down");
    });
    connection.on('open',function(){
        console.log("successfully connected");
    })
}
module.exports={
    connect: connect,
}