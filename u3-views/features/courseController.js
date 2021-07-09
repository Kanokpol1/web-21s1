const { getCourse } = require('../_services/fakedb')

const courseDetails = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)

  // left `coure` = neme in handlebars
  // right `coure` = JS variable

  res.render('course-details', { course: course })
}

const courseUnits = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)

  // left `units` = neme in handlebars
  // right `coure.units` = JS expression

  res.render('course-units', { units: course.units })
}

const courseStudent = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)
  res.render('course-students', { course: course })
}
module.exports = {
  courseDetails,
  courseUnits,
  courseStudent
}
