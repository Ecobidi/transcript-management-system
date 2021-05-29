const CourseModel = require('../models/course')

class CourseService {

  static async findById(id) {
    return CourseModel.findById(id)
  }
  
  static async findAll() {
    return CourseModel.find({})
  }

  static async findByTitle(title) {
    return CourseModel.find({course_title: new RegExp(title, 'ig')})
  }

  static async create(dao) {
    return CourseModel.create(dao)
  }

  static async removeOne(id) {
    return CourseModel.findByIdAndRemove(id)
  }

}

module.exports = CourseService