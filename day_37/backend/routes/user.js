const express = require("express")
const router = express.Router()
const zod = require("zod");
const { User, Account } = require("../db");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const authmiddleware = require("./middleware");

const signupBody = zod.object({
    username: zod.string().email(),
    fname: zod.string().min(3),
    lname: zod.string().min(3),
    password: zod.string().min(8),
})

const signinSchema = signupBody.pick({ username: true, password: true });
const changePassSchema = signupBody.partial();
router.post("/signin", async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(401).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    })

    const userID = user._id;
    if (user) {
        const token = jwt.sign({
            userID
        }, JWT_SECRET)

        res.json({
            token: token,
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(401).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username,
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        fname: req.body.fname,
        lname: req.body.lname,
        password: req.body.password,

    })

    const userID = user._id;

    const token = jwt.sign({
        userID
    }, JWT_SECRET)

    await Account.create({
        userID: userID,
        balance: 1 + Math.random() * 10000
    })
    res.json({
        message: "User created successfully",
        token: token
    })

})

router.put("/changePassword", authmiddleware, async (req, res) => {
    const { success } = changePassSchema.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, req.body)

    res.status(200).json({
        message: "Updated successfully"
    })
})


router.get("/bulk", authmiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            fname: {
                "$regex": filter
            }
        }, {
            lname: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            fname: user.fname,
            lname: user.lname,
            userID: user._id
        }))
    })
})



router.get("/me", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.redirect("http://localhost:5173/signup");
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userID).select("-password");
        if (!user) return res.redirect("http://localhost:5173/signup");
        res.json({ user });
    } catch (err) {
        return res.redirect("http://localhost:5173/signup");
    }
})

module.exports = router;


// /api/v1/users/signin
// /api/v1/users/signup
// /api/v1/users/changePassword
// /api/v1/users/me
// /api/v1/users/bulk
// /api/v1/users/me
// /api/v1/users/bulk

