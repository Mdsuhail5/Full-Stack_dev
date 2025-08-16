const adminMiddleware = require("../middleware/admin");
const { Router } = require("express");
const router = Router();
const { Admin, Course } = require("../db")


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

router.post('/courses', adminMiddleware, async (req, res) => {
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

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
        .then(function (response) {
            res.json({
                Course: response
            })
        })
});

module.exports = router;