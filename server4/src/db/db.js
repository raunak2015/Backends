const mongoose = require("mongoose");


async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected with MongoDB!!");
    }catch(err){
        console.log("Error while Conection", err);
    }
}

module.exports = connectDB;