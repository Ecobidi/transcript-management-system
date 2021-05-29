const mongoose = require('mongoose')
let DepartmentSchema = new mongoose.Schema({
  department_name: {
    type: String,
    required: true,
  },
  faculty:  {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('department', DepartmentSchema)