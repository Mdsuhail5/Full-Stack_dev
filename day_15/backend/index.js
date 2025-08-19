//write basic express boilerplate code 
//with express.json() middleware
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db");
const express = require("express");
const app = express();

app.use(express.json())
app.post('/todo', async function (req, res) {
    const createpayload = req.body;
    const parsedpayload = createTodo.safeParse(createpayload)
    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    //put it in mongodb
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get('/todos', async function (req, res) {
    const todos = await todo.find({})
    res.json({
        todos
    })
});

app.put('/completed', async function (req, res) {
    const updatepayload = req.body;
    const parsedpayload = updateTodo.safeParse(updatepayload);
    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true,
    })

    res.json({
        msg: "Todo is completed!"
    })
});

app.listen(port = 3000);