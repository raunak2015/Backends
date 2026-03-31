const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model");
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());

const Upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", Upload.single("image"), async(req,res)=>{
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer);

    const caption = req.body.caption || req.body.text || "";

    const post = await postModel.create({
        image : result.url,
        caption : caption
    })
    return res.status(201).json({
        mes: "post created successfully",
        post
    })
    console.log(result)
})

app.get("/posts",async (req,res)=>{
    const posts = await postModel.find()

    return res.status(200).json({
        mes: "posts fetched successfully",
        posts : posts
    })
})

module.exports = app;