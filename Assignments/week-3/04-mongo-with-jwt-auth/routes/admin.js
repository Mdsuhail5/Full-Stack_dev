const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    try {
        // Implement admin signin logic
        const username = req.body.username;
        const password = req.body.password;

        const admin = await Admin.findOne({
            username,
            password
        })

        if (admin) {
            const token = jwt.sign({
                username
            }, JWT_SECRET);

            res.json({
                token: token
            })
        } else {
            res.status(411).json({
                message: "Incorrect email and pass"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error during signin",
            error: error.message
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        // Implement course creation logic
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const imagelink = req.body.imagelink;

        const new_course = await Course.create({
            title,
            description,
            price,
            imagelink
        })
        console.log(new_course);
        res.json({
            msg: 'Course created successfully', courseId: new_course._id,
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error creating course",
            error: error.message
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;