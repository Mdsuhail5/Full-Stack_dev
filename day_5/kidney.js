
const express = require('express');
const app = express();

var user = [{
    name: "kai",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());
app.get('/', function (req, res) {

    const kai_kidneys = user[0].kidneys;
    const no_of_kidneys = kai_kidneys.length;

    let no_of_healthykidneys = 0;
    for (let i = 0; i < kai_kidneys.length; i++) {
        if (kai_kidneys[i].healthy) {
            no_of_healthykidneys = no_of_healthykidneys + 1;
        }
    }
    const no_of_unhealthykidneys = no_of_kidneys - no_of_healthykidneys;
    res.json({
        no_of_kidneys,
        no_of_healthykidneys,
        no_of_unhealthykidneys,
    })
});

app.post('/', function (req, res) {
    if (atleastoneunhealthykidney()) {
        const isHealthy = req.body.isHealthy;
        user[0].kidneys.push({
            healthy: isHealthy
        })
        res.json({
            msg: 'Done!'
        })
    } else {
        res.send(411).json({
            msg: "You already have a helthy kidney";
        })
    }

});

app.put('/', function (req, res) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({})
});

app.delete('/', function (req, res) {
    if (atleastoneunhealthykidney()) {
        const newKidney = [];
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidney.push({
                    healthy: true
                })
            };
        }
        user[0].kidneys = newKidney;
        res.json({ msg: "Done!" })
    } else {
        res.status(411).json({
            msg: "You have no bad kidney"
        })
    }

});

function atleastoneunhealthykidney() {
    let atleastoneunhealthykidney = false;
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastoneunhealthykidney = true
        };
    }
    return
}

app.listen(3000); 