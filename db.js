const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017";
//mongodb://127.0.0.1
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{}, ).then(()=>
        console.log("Connected to Mongo Successfully"));
    
}

module.exports = connectToMongo;