const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.username;
    const password=req.password;
    await User.create({
        username,password,
    })
    res.json({
        msg:"user created successfully"
    })

});

router.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
     const response=await Course.find({})

     res.json({
        courses:response
     })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.headers.username;
    User.updateOne({
        username:username
    },{
        purchasedCourses:{
            "$push":courseId
        }
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router