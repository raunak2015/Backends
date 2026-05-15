const mongoose = require("mongoose")

async function connectDB() {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("Missing MONGO_URI in environment. Add it to Backend/.env");
    }

    await mongoose.connect(mongoUri);
    console.log("connected with MongoDB");
}

module.exports = connectDB;