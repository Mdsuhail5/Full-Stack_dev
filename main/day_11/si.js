const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/sum', function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    let sum = a + b;
    res.send(sum);
});

app.get('/SI', function (req, res) {
    const p = parseInt(req.query.p);
    const t = parseInt(req.query.t);
    const r = parseInt(req.query.r);

    const interest = (p * t * r) / 100;
    let total = p + interest;
    res.send({
        total: total,
        interest: interest,
    })

});

app.listen(3000, function () {
    console.log("Simple Interest server is running on http://localhost:3000");
});