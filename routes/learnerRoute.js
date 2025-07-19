// // @desc    Get all courses assigned to a learner
// // @route   GET /api/learner/courses/:learnerId
// // @access  Public (for now)

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { getCoursesByUserId } = require('../controllers/learnerController');
const { getAssignmentsForUser } = require('../controllers/assignmentController');

// GET: /api/learner/courses/:userId
router.get('/courses/:userId', getCoursesByUserId);
// GET /api/learner/assignments/:userId
router.get('/assignments/:userId', getAssignmentsForUser);

module.exports = router;

