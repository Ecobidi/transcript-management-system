const mongoose = require('mongoose')
let CourseSchema = new mongoose.Schema({
  course_title: {
    type: String,
    required: true,
  },
  course_code:  {
    type: String,
    required: true,
    unique: true,
  },
  course_load: {
    type: Number,
  },
  department: {
    type: String,
  },
  level: {
    type: String,
    enum: ['100', '200', '300', '400'],
  },
  semester: {
    type: String,
    enum: ['first', 'second'],
  }
})

module.exports = mongoose.model('course', CourseSchema)