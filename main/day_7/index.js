const express = require('express');
const app = express();
const port = 3000;

app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if (username != 'Kai' || password != 'pass') {
        res.status(400).json('something is wrong is with inputs')
    }
    if (kidneyID != 1 && kidneyID != 2) {
        res.status(400).json('something is wrong is with inputs')
    }

    res.json("Your kidney is healthy")
})


app.listen(port);