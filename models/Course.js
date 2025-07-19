const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    role: { type: String, required: true },
    profileImage: { type: String, required: true },
  },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
  liveClasses: [
    {
      title: String,
      lecture_no: Number,
      date: Date,
      link: String
    }
  ],
  assignments: [
    {
      title: String,
      dueDate: Date,
      status: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
