const Teacher = require("../models/Teacher");
const Test = require("../models/Tests");
const Student = require("../models/Student")

module.exports = {
  getStudentProfile: async (req, res) => {
    try {
      let tests
      const teacher = await Teacher.findOne()
      if (teacher) {
        console.log(teacher)
       tests = await Test.find({createdBy: teacher.classId}).lean()
      }
      const selectedTest = await Test.findById(req.query.testId);
      const student = await Student.find({studentId: req.user.id}).lean()
      res.render("./student/profile", { tests: tests, user: req.user, selectedTest: selectedTest, student: student});
    } catch (err) {
      console.log(err);
      res.render("errors/404")
    }
  },

};
