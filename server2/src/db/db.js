const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect("mongodb://yt:paJOqqr1S8daIP8a@ac-b6tjgxs-shard-00-00.grbnsda.mongodb.net:27017,ac-b6tjgxs-shard-00-01.grbnsda.mongodb.net:27017,ac-b6tjgxs-shard-00-02.grbnsda.mongodb.net:27017/?ssl=true&replicaSet=atlas-vyzptf-shard-0&authSource=admin&appName=Full-Backend")

    console.log("conected to MongoDB");
}


module.exports = connectDB;