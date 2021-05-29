const CourseService = require('../services/course')
const DepartmentService = require('../services/department')

class CourseController {

  static async getCoursesPage(req, res) {
    let courses
    let departments = await DepartmentService.findAll()
    if (req.query.search) {
      courses = await CourseService.findByTitle(req.query.search)
    } else {
      courses = await CourseService.findAll()
    }
    res.render('courses', {courses, departments})
  }

  static async createCourse(req, res) {
    let dao = req.body
    try {
      await CourseService.create(dao)
      res.redirect('/courses')
    } catch (err) {
      console.log(err)
      res.redirect('/courses')
    }
  }

  static async removeCourse(req, res) {
    try {
      await CourseService.removeOne(req.params.course_id)
      res.redirect('/courses')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/courses')
    }
  }

}

module.exports = CourseController