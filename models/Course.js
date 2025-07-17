const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  category: String,
  thumbnailUrl: String,
  author: {
    name: String,
    role: String,
    profileImage: String
  },
  assignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  liveClasses: [
    {
      title: String,
      lecture_no: Number,
      date: Date,
      link: String
    }
  ],
  tasks: [
    {
      title: String,
      dueDate: Date
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
