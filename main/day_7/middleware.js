const express = require("express");
const app = express();
const zod = require('zod');

function usernameMiddleware(req, res, next) {
    if (username != "Raju" && password != "pass") {
        res.status(403).json({
            msg: "User doesnt exist",
        });
    } else {
        next();
    };
}

function kidneyMiddleware(req, res, next) {
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "wrong inputs",
        });
    } else {
        next();
    }
}

app.get('/health-checkup', usernameMiddleware, kidneyMiddleware, function (req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    res.send("Your heart is healthy");
});

app.get('/kidney-check', usernameMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your heart is healthy")
})

//global cathes
app.use((error, req, res, next) => {
    res.status(500).send('An internal server error occurred');
});



app.listen(3000);