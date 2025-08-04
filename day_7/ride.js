const express = require('express');
const app = express();

function isOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}
app.get("/ride1", function (req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully ridden the ride 1"
        })
    } else {
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })
    }
});

app.listen(3000); 
