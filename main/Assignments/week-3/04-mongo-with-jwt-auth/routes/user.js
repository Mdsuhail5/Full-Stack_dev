const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then(function (response) {
        res.json({
            courses: response
        });
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        // Implement admin signin logic
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({
            username,
            password
        })

        if (user) {
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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    });
    res.json({
        msg: "Purchase Complete!"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })

});

module.exports = router