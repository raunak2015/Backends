const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const userModel = require("../models/user.model");

router.post("/create", async (req, res) => {
    console.log("req.body", req.body);
    console.log("cookies", req.cookies);

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized!!"
        })
    }

    try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("decoded", decoded);
            const user = await userModel.findById(decoded.id);
            console.log("user", user);

    }catch(err){
        return res.status(401).json({
            message: "Token is Invalid!!"
        })
    }
    res.json({
        message: "Post Created Successfully!!",
        post: req.body
    })
})

module.exports = router;