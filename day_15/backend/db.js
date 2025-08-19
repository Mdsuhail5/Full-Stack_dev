/*Todo {
title:string;
description:string;
complete:boolean
} */


const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://u25mohammedsuhail:YVxeakksrkACekT8@cluster0.tz8peoj.mongodb.net/todo-app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model("todo", todoSchema);

module.exports = {
    todo
}
