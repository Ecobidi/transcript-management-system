const ResultModel = require('../models/result')

class ResultService {

  static async findById(id) {
    return ResultModel.findById(id)
  }
  
  static async findBy(query) {
    return ResultModel.find(query)
  }

  static async findByStudentRegNo(student_reg_no) {
    return ResultModel.findOne({student_reg_no})
  }

  static async create(dao) {
    return ResultModel.create(dao)
  }

  static async removeOne(id) {
    return ResultModel.findByIdAndRemove(id)
  }

}

module.exports = ResultService