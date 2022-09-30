const User = require("../models/User");
const Test = require("../models/Tests");
const Student = require("../models/Student")

module.exports = {
  getStudentProfile: async (req, res) => {
    try {
      let tests
      const teacher = await User.findOne({role: "teacher", classId: req.user.classId})
      tests = await Test.find({createdBy: teacher._id}).lean()
      console.log(tests)
      const selectedTest = await Test.findById(req.query.testId);
      console.log(selectedTest)
      const student = await Student.find({studentId: req.user.id}).lean()
      console.log(student)
      res.render("./student/profile", { tests: tests, user: req.user, selectedTest: selectedTest, student: student});
    } catch (err) {
      console.log(err);
      res.render("errors/404")
    }
  },

};
