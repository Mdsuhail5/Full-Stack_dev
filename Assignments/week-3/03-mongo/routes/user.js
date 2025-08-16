const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.query.username;
    const password = req.query.password;

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
        Course: response,
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
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
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic

});

module.exports = router