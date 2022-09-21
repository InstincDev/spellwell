const User = require("../models/User");
const Test = require("../models/Tests")

module.exports = {
  getProfile: async (req, res) => {
    try {
      const tests = await Test.find().lean()
      const selectedTest = await Test.findById(req.query.testId);
      res.render("./user/profile", { tests: tests, user: req.user, selectedTest: selectedTest});
    } catch (err) {
      console.log(err);
    }
  },

};
