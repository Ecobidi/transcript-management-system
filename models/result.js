const mongoose = require('mongoose')

let ResultSchema = new mongoose.Schema({
  student_reg_no: {
    type: String,
    required: true,
    unique: true,
  },
  level_1_cgpa: {
    type: String,
  },
  level_2_cgpa: {
    type: String,
  },
})

module.exports = mongoose.model('result', ResultSchema)