const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
app.get('/health-checkup', (req, res) => {
    const kidneys = res.body.kidneys;
    const kidneyLength = res.query.kidneyLength;

    res.send("you have" + kidneyLength + "kidneys");
})