const User = require("../models/User");
const Test = require("../models/Tests");
const Student = require("../models/Student")

module.exports = {
  getStudentProfile: async (req, res) => {
    try {
      const tests = await Test.find().lean()
      console.log(tests)
      const selectedTest = await Test.findById(req.query.testId);
      const student = await Student.find({studentId: req.user.id}).lean()
      console.log(student)
      res.render("./student/profile", { tests: tests, user: req.user, selectedTest: selectedTest, student: student});
    } catch (err) {
      console.log(err);
      res.render("errors/404")
    }
  },

};
