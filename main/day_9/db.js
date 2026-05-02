const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect('server connection link')

const Users = mongoose.model('user', { name: String, email: String, password: String });

app.post('/signup', async function (req, res) {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    const existingUser = await Users.findOne({ email: username });
    if (existingUser) {
        res.status(400).send("User already exists");
    }

    const user = new Users({
        email: username,
        name: name,
        password: password
    })

    user.save();
    res.json({
        msg: "User create successfully!"
    })
})


app.listen(3000);