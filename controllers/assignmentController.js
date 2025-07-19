const Course = require('../models/Course');

// GET /api/learner/assignments/:userId
const getAssignmentsForUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // 1. Find courses assigned to the user
    const courses = await Course.find({ assignedTo: userId });

    // 2. Extract relevant assignment data
    const assignmentList = [];

    courses.forEach(course => {
      course.assignments.forEach(assignment => {
        assignmentList.push({
          title: assignment.title,
          dueDate: assignment.dueDate,
          subject: course.title  // course name as "subject"
        });
      });
    });

    res.status(200).json({ assignments: assignmentList });
  } catch (error) {
    console.error('Error fetching assignments:', error);
    res.status(500).json({ message: 'Failed to fetch assignments' });
  }
};

module.exports = {
  getAssignmentsForUser
};
