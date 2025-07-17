// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');
// const mongoose = require('mongoose');

// // @desc    Get all courses assigned to a learner
// // @route   GET /api/learner/courses/:learnerId
// // @access  Public (for now)
// router.get('/courses/:userId', async (req, res) => {
//   try {
//     const userId = new mongoose.Types.ObjectId(req.params.userId);
//     const userCourses = await Course.find({ assignedTo: userId });
//     res.json(userCourses);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

// routes/learnerRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { getCoursesByUserId } = require('../controllers/learnerController');

// GET: /api/learner/courses/:userId
router.get('/courses/:userId', getCoursesByUserId);

module.exports = router;

