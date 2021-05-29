const mongoose = require('mongoose')

let StudentSchema = new mongoose.Schema({
  reg_no: {
    type: String,
    required: true,
    unique: true,
  },
  surname: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
  },
  institution: String,
  faculty: String,
  department: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  origin_state: {
    type: String,
  },
  origin_lga: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  dob: {
    type: String,
  },
  photo:{
    type: String,
  },
  level_1_1: Number,
  level_1_2: Number,
  level_2_1: Number,
  level_2_2: Number,
  level_3_1: Number,
  level_3_2: Number,
  level_4_1: Number,
  level_4_2: Number,
})

module.exports = mongoose.model('student', StudentSchema)