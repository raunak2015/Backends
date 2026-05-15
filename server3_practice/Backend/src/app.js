const express = require("express");
const postModel = require("./models/post.model");
const multer = require("multer");
const uploadFile = require("./service/storage.service")

const app = express();
app.use(express.json());


const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post",upload.single("image"), async(req,res)=>{

    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer)

    const caption = req.body.caption;

    const post = await postModel.create({
        image: result.url,
        caption : caption
    })

    return res.status(200).json({
        mes:"post created successfully!!",
        post
    })
})

app.get("/get-posts", async(req,res)=>{
    const posts = await postModel.find();

    return res.status(200).json({
        mas:"posts fetched successfully!!",
        posts : posts
    })
})

module.exports = app;