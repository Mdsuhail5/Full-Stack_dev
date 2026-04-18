const express = require('express')
const z = require('zod')
const jwt = require('jsonwebtoken')
const { User } = require("../db")
const { JWT_SECRET } = require("../config")
const router = express.Router()

const signupSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
    fname: z.string(),
    lname: z.string(),
})


router.post('/signup', async (req, res) => {
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json(
            {
                message: "Email already taken / Incorrect inputs"
            }
        )
    }

    const existingUser = await User.findOne({
        email: req.body.email,
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already exists/Incorrect inputs"
        })
    }

    const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname
    })

    const token = jwt.sign({
        userID: newUser._id
    }, JWT_SECRET)

    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})


const signinSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})


router.post('/signin', async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "invalid inputs"
        })
    }

    const existinguser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (existinguser) {
        const token = jwt.sign({
            userID: existinguser._id
        }, JWT_SECRET)

        res.status(200).json({
            token: token
        })
        return;
    }


    res.status(411).json({
        message: "Error while logging in"
    })

})

const updateSchema = z.object({
    email: z.email().optional(),
    password: z.string().min(6).optional(),
    fname: z.string().optional(),
    lname: z.string().optional()
})
router.put('/update', async (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(411).json({
            message: "Error"
        })
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        const userID = decoded.userID

        const { success } = updateSchema.safeParse(req.body)

        if (!success) {
            return res.status(411).json({
                message: "Invalid inputs"
            })
        }

        await User.updateOne({
            _id: userID
        }, {
            $set: req.body
        })

        res.status(200).json({
            message: "Updated successfully"
        })
    }
    catch (error) {
        return res.status(403).json({
            message: "Invalid token"
        })
    }

})

module.exports = router;

