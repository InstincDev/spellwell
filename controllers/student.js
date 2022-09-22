const User = require("../models/User");
const Test = require("../models/Tests")

module.exports = {
  getStudentProfile: async (req, res) => {
    try {
      const tests = await Test.find().lean()
      const selectedTest = await Test.findById(req.query.testId);
      res.render("./student/profile", { tests: tests, user: req.user, selectedTest: selectedTest});
    } catch (err) {
      console.log(err);
    }
  },

};
