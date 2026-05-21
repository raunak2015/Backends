const express = require("express");
const authRouter = require("./routes/auth.route");
const app = express();

// parse JSON request bodies before registering routes
app.use(express.json());
app.use("/api/auth", authRouter);

module.exports = app;