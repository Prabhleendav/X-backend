// @desc    Get all courses assigned to the learner
// @route   GET /api/learner/courses/:learnerId
const Course = require("../models/Course");
const User = require("../models/User");
const getCoursesByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userCourses = await Course.find({
      assignedTo: { $in: [userId] }
    })
    .populate('assignedTo', 'fullName email role avatarUrl')
    .exec();


    res.status(200).json(userCourses);
  } catch (error) {
    console.error("Error fetching courses by userId:", error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  getCoursesByUserId
};
