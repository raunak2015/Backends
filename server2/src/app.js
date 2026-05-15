const express = require("express");
const noteModel = require("./models/note.model")

const app = express();
app.use(express.json());

app.post("/notes",async(req,res)=>{
    const data = req.body;
    await noteModel.create({
        title: data.title,

        description: data.description
    })
    res.status(201).json({
        Message : "note created seccessfully!!"
    })
})

app.get("/notes",async(req,res)=>{
    const data = await noteModel.find()
    res.status(200).json({
        message : "fetched successfully!",
        notes : data
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message : "deleted Successfully!!"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    const description = req.body.description;
    await noteModel.findOneAndUpdate({
        _id : id
    },
    {
        description:description
    })

    res.status(200).json({
        message : "updated successfully!!"
    })
})

module.exports = app;